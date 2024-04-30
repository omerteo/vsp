import { NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import { revalidatePath } from "next/cache"

export async function GET(req: Request) {
	try {
		const assetTypes = await prisma.assetType.findMany()
		revalidatePath(req.url)

		return NextResponse.json(assetTypes)
	} catch (error: any) {
		if (error.code === "P2001") {
			return NextResponse.json(
				{
					status: "fail",
					message: "asset type already exists",
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