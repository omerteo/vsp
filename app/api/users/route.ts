import { NextResponse } from "next/server"
import prisma from "@/prisma/prisma"

export async function GET(req: Request) {
	try {
		const users = await prisma.user.findMany({})

		return NextResponse.json(users)
	} catch (error: any) {
		return NextResponse.json(
			{
				status: "error",
				message: error.message || "Internal Server Error",
			},
			{ status: 500 }
		)
	}
}
