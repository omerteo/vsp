"use server"

import { revalidatePath } from "next/cache"
import prisma from "@/prisma/prisma"
import { ZodError } from "zod"

const createSchedule: any = async (prevState: null, values: any) => {
	const formDatatoObject = Object.fromEntries(values)

	try {
		const { typeId, employeeId, startDate, scheduleType, endDate } = formDatatoObject
		const dayObject = Object.entries(formDatatoObject).reduce((acc: any, [key, value]) => {
			if (key.startsWith("days")) {
				acc[key.split(".")[1]] = value
			}
			return acc
		}, {})
		let dayArray
		if (scheduleType === "permanent") {
			dayArray = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
		} else {
			dayArray = Object.keys(dayObject).filter((key) => dayObject[key])
		}

		const schedule = await prisma.schedule.create({
			data: {
				assetId: +typeId,
				employeeId: +employeeId,
				startDate: new Date(startDate).toISOString(),
				scheduleType: scheduleType,
				days: {
					create: dayArray.map((dayOfWeek) => ({ dayOfWeek })),
				},
				endDate: endDate && new Date(endDate).toISOString(),
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
