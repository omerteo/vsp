import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import { revalidatePath } from "next/cache"

import { getToken } from "next-auth/jwt"

export async function GET(req: NextRequest) {
	try {
		revalidatePath(req.url)
		// const token = await getToken({
		// 	secret: process.env.JWT_SECRET!,
		// 	secureCookie: process.env.NODE_ENV === "production",
		// 	salt: process.env.NODE_ENV === "production" ? "__Secure-authjs.session-token" : "authjs.session-token",
		// 	req,
		// })

		// if (!token) {
		// 	return NextResponse.json(
		// 		{
		// 			status: "error",
		// 			message: "Unauthorized",
		// 		},
		// 		{ status: 401 }
		// 	)
		// }
		const assetTypes = await prisma.assetType.findMany()

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
