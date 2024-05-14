import { LoginForm } from "./login-form"
import { Suspense } from "react"

export default async function LoginPage() {
	return (
		<>
			<section className=" min-h-screen pt-20">
				<div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
					<div className="md:w-8/12 lg:w-5/12  px-8 py-10 bg-white dark:bg-gray-600 rounded-md shadow-lg sm:w-10/12">
						<Suspense fallback={<>Loading...</>}>
							<LoginForm />
						</Suspense>
					</div>
				</div>
			</section>
		</>
	)
}
