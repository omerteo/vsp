import { NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import { ZodError } from "zod"
import { revalidatePath } from "next/cache"

export async function POST(req: Request) {
	try {
		revalidatePath(req.url)
		const { name } = await req.json()

		const day = await prisma.day.create({
			data: {
				name,
			},
		})

		return NextResponse.json({
			day: {
				name: day.name,
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
					message: "user with that email already exists",
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
