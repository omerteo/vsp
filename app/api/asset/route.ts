import { hash } from "bcryptjs"
import { NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import { ZodError } from "zod"
import { assetSchema } from "@/lib/asset-schema"

export async function POST(req: Request) {
	try {
		const { name, type } = assetSchema.parse(await req.json())

		const asset = await prisma.asset.create({
			data: {
				name,
				type: parseInt(type)
			},
		})

		return NextResponse.json({
			asset: {
				name: asset.name,
				type: asset.type,
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

export async function GET(req: Request) {
	try {
		const assets = await prisma.asset.findMany()

		return NextResponse.json({
			assets: assets,
		})
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
