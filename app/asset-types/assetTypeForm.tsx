"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FieldPath, useForm } from "react-hook-form"
import { useFormState, useFormStatus } from "react-dom"
import { useEffect } from "react"
import toast from "react-hot-toast"
import { AssetType } from "@/types/user"
import { AssetTypeInput, assetTypeSchema } from "@/lib/asset-schema"
import createAssetType from "@/utils/createAssetType"

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

export const AssetTypeForm = () => {
	const [createPostState, createPostAction] = useFormState<State, any>(createAssetType, null)
	const { pending } = useFormStatus()
	const methods = useForm<AssetTypeInput>({
		resolver: zodResolver(assetTypeSchema),
		mode: "all",
	})

	const {
		register,
		formState: { errors },
		setError,
		reset,
	} = methods

	const input_style =
		"form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

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
				setError(error.path as FieldPath<AssetType>, {
					message: error.message,
				})
			})
		}
	}, [createPostState, setError, reset])
	return (
		<form action={createPostAction}>
			<div className="mb-6">
				<input {...register("name")} placeholder="Name" className={`${input_style}`} />
				{errors["name"] && <span className="text-red-500 text-xs pt-1 block">{errors["name"]?.message as string}</span>}
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
