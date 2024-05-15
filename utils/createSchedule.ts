"use server"

import { revalidatePath } from "next/cache"
import prisma from "@/prisma/prisma"
import { ZodError } from "zod"

const createSchedule: any = async (prevState: null, values: any) => {
	const formDatatoObject = Object.fromEntries(values)

	try {
		const { typeId, userId, startDate, endDate, days } = formDatatoObject
		console.log("days", days)
		const schedule = await prisma.schedule.create({
			data: {
				assetId: +typeId,
				userId: userId,
				startDate: new Date(startDate).toISOString(),
				endDate: new Date(endDate).toISOString(),
				days: {
					connect: days?.split(",").map((dayId: string) => ({ id: +dayId })),
				},
			},
		})

		revalidatePath("/schedules")

		return {
			status: "success",
			message: schedule,
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

export default createSchedule
