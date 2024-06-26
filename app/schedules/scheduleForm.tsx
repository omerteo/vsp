"use client"

import { assetSchema } from "@/lib/asset-schema"
import createSchedule from "@/utils/createSchedule"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { Controller, FieldPath, useForm } from "react-hook-form"
import toast from "react-hot-toast"

export type State =
	| {
			status: "success"
			message: string
	  }
	| {
			status: "error"
			message: string
			errors?: Array<{
				path: string
				message: string
			}>
	  }
	| null

export const ScheduleForm = ({ assets, users }: { assets: any; users: any }) => {
	const [createPostState, createPostAction] = useFormState<State, any>(createSchedule, null)
	const { pending } = useFormStatus()
	const [scheduleType, setScheduleType] = useState("")
	const methods = useForm<any>({
		resolver: zodResolver(assetSchema),
		mode: "all",
	})

	const {
		register,
		formState: { errors },
		setError,
		reset,
		control,
	} = methods

	const input_style =
		"form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white dark:bg-gray-800 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus: outline-none focus:border-blue-500 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:text-gray-300 dark:focus:bg-gray-700 "

	const select_style =
		"form-control block w-full px-4 py-4 text-sm font-normal text-gray-700 bg-white dark:bg-gray-800 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus: outline-none focus:border-blue-500 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:text-gray-300 dark:focus:bg-gray-700 appearance-none"

	useEffect(() => {
		if (!createPostState) {
			return
		}

		if (createPostState.status === "success") {
			toast.success("successfully created")
			reset()
		}

		if (createPostState.status === "error") {
			toast.error(createPostState.message)
			createPostState.errors?.forEach((error) => {
				setError(error.path as any, {
					message: error.message,
				})
			})
		}
	}, [createPostState, setError, reset])
	return (
		<form action={createPostAction}>
			<div className="mb-6 flex flex-col gap-2">
				{/* <input {...register("name")} placeholder="Name" className={`${input_style}`} />
				{errors["name"] && <span className="text-red-500 text-xs pt-1 block">{errors["name"]?.message as string}</span>} */}
				<select className={`${select_style} `} {...register("typeId")}>
					<option selected disabled>
						Select asset
					</option>
					{assets?.map((assetType: any, index: number) => (
						<option key={index} value={assetType.id}>
							{assetType.name}
						</option>
					))}
				</select>
				{errors["typeId"] && (
					<span className="text-red-500 text-xs pt-1 block">{errors["typeId"]?.message as string}</span>
				)}
				<select className={`${select_style}`} {...register("employeeId")}>
					<option selected disabled>
						Select user
					</option>
					{users?.map((user: any, index: number) => (
						<option key={index} value={user.employeeId}>
							{user.name}
						</option>
					))}
				</select>

				<input {...register("startDate")} type="date" placeholder="Start Date" className={`${input_style}`} />
				{errors["startDate"] && (
					<span className="text-red-500 text-xs pt-1 block">{errors["startDate"]?.message as string}</span>
				)}

				<input {...register("endDate")} type="date" placeholder="End Date" className={`${input_style}`} />
				{errors["endDate"] && (
					<span className="text-red-500 text-xs pt-1 block">{errors["endDate"]?.message as string}</span>
				)}

				<select
					className={`${select_style}`}
					{...register("scheduleType")}
					onChange={(e) => setScheduleType(e.target.value)}
				>
					<option selected disabled>
						Select schedule type
					</option>
					<option value="permanent">Permanent</option>
					<option value="weekly">Weekly</option>
				</select>

				{errors["scheduleType"] && (
					<span className="text-red-500 text-xs pt-1 block">{errors["scheduleType"]?.message as string}</span>
				)}

				{scheduleType === "weekly" && (
					<div className="space-y-2">
						{["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
							<Controller
								key={day}
								name={`days.${day}`}
								control={control}
								defaultValue={false} // set default value
								render={({ field }) => (
									<label className="flex items-center space-x-2">
										<input type="checkbox" {...field} className="form-checkbox h-5 w-5 text-blue-600" />
										<span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
									</label>
								)}
							/>
						))}
					</div>
				)}
			</div>

			<button
				type="submit"
				style={{ backgroundColor: `${pending ? "#ccc" : "#3446eb"}` }}
				className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
				disabled={pending}
			>
				{pending ? "loading..." : "Create"}
			</button>
		</form>
	)
}
