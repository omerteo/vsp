import { auth } from "@/auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function GET(_request: Request) {
	const session = await auth()

	if (!session?.user) {
		return new NextResponse(JSON.stringify({ status: "fail", message: "You are not logged in" }), { status: 401 })
	}

	revalidatePath(_request.url)

	return NextResponse.json({
		authenticated: !!session,
		session,
	})
}
