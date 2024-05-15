import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Home() {
	const session = await auth()
	if (!session) {
		redirect("/login")
	}

	return (
		<>
			<section className=" min-h-screen pt-20">
				<div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
					<p className="text-3xl font-semibold">Virtual Seating</p>
				</div>
			</section>
		</>
	)
}
