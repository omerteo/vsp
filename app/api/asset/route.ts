import { hash } from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import { ZodError } from "zod"
import { assetSchema } from "@/lib/asset-schema"

export async function POST(req: Request) {
	try {
		const { name, typeId, employeeId } = assetSchema.parse(await req.json())

		const asset = await prisma.asset.create({
			data: {
				name,
				typeId: Number(typeId),
				employees: {
					create: {
						employeeId: Number(employeeId),
					},
				},
			},
		})

		return NextResponse.json({
			asset: {
				name: asset.name,
				typeId: asset.typeId,
			},
		})
	} catch (error: any) {
		if (error instanceof ZodError) {
			return NextResponse.json(
				{
					status: "error",
					message: "Validation failed",
					errors: error.errors,
				},
				{ status: 400 }
			)
		}

		if (error.code === "P2002") {
			return NextResponse.json(
				{
					status: "fail",
					message: "asset already exists",
				},
				{ status: 409 }
			)
		}

		return NextResponse.json(
			{
				status: "error",
				message: error.message || "Internal Server Error",
			},
			{ status: 500 }
		)
	}
}

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams
		// totals records for each page
		const limit = searchParams?.get("limit") ?? "5"
		// skip for the offset
		const offset = searchParams?.get("offset") ?? "0"
		const assets = await prisma.asset.findMany({
			skip: Number(offset),
			take: Number(limit),
		})
		const totals = await prisma.asset.count()

		return NextResponse.json({ data: JSON.stringify(await assets), totals: totals })
	} catch (error: any) {
		if (error.code === "P2001") {
			return NextResponse.json(
				{
					status: "fail",
					message: "asset already exists",
				},
				{ status: 409 }
			)
		}
		return NextResponse.json(
			{
				status: "error",
				message: error.message || "Internal Server Error",
			},
			{ status: 500 }
		)
	}
}
