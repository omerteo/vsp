"use server"

import { State } from "@/app/register/register-form"
import { assetTypeSchema } from "@/lib/asset-schema"
import prisma from "@/prisma/prisma"
import { revalidatePath } from "next/cache"
import { ZodError } from "zod"

const createAssetType: any = async (prevState: State | null, values: FormData) => {
	const formDatatoObject = Object.fromEntries(values)

	try {
		const { name } = assetTypeSchema.parse(formDatatoObject)
		const assetType = await prisma.assetType.create({
			data: {
				name,
			},
		})

		revalidatePath("/", "layout")

		return {
			status: "success",
			message: assetType,
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

export default createAssetType
