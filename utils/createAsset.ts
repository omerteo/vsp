"use server"

import { State } from "@/app/register/register-form"
import { assetSchema } from "@/lib/asset-schema"
import prisma from "@/prisma/prisma"
import { revalidatePath } from "next/cache"
import { ZodError } from "zod"

const createAsset: any = async (prevState: State | null, values: FormData) => {
	const formDatatoObject = Object.fromEntries(values)

	try {
		const { name, typeId, employeeId } = assetSchema.parse(formDatatoObject)
		const asset = await prisma.asset.create({
			data: {
				name,
				typeId: +typeId,
				employees: {
					create: {
						employeeId: +employeeId,
					},
				},
			},
		})

		revalidatePath("/assets")

		return {
			status: "success",
			message: asset,
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

export default createAsset
