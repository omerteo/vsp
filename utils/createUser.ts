"use server"

import { State } from "@/app/register/register-form"
import { createUserSchema } from "@/lib/user-schema"
import prisma from "@/prisma/prisma"
import { hash } from "bcryptjs"
import { ZodError } from "zod"

const createUser: any = async (prevState: State | null, values: FormData) => {
	const formDatatoObject = Object.fromEntries(values)

	try {
		const { name, email, password } = createUserSchema.parse(formDatatoObject)

		const hashed_password = await hash(password, 12)
		const user = await prisma.user.create({
			data: {
				name,
				email: email.toLowerCase(),
				password: hashed_password,
			},
		})

		return {
			status: "success",
			message: user,
		}
	} catch (e: any) {
		if (e instanceof ZodError) {
			return {
				status: "error",
				message: "Invalid form data",
				errors: e.issues.map((issue) => ({
					path: issue.path.join("."),
					message: `Server validation: ${issue.message}`,
				})),
			}
		}
		return {
			status: "error",
			message: e.message || "Internal Server Error",
		}
	}
}

export default createUser
