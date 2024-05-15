"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FieldPath, useForm } from "react-hook-form"
import { CreateUserInput, createUserSchema } from "@/lib/user-schema"
import createUser from "@/utils/createUser"
import { useFormState, useFormStatus } from "react-dom"
import { useEffect } from "react"
import { signIn } from "next-auth/react"
import toast from "react-hot-toast"
import { User } from "@/types/user"

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

export const RegisterForm = () => {
	const [createPostState, createPostAction] = useFormState<State, any>(createUser, null)
	const { pending } = useFormStatus()
	const methods = useForm<CreateUserInput>({
		resolver: zodResolver(createUserSchema),
		mode: "all",
	})

	const {
		register,
		formState: { errors },
		setError,
		reset,
	} = methods

	const input_style =
		"form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white dark:bg-gray-800 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus: outline-none focus:border-blue-500 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:text-gray-300 dark:focus:bg-gray-700"

	useEffect(() => {
		if (!createPostState) {
			return
		}

		if (createPostState.status === "success") {
			toast.success("successfully registered")
			reset()
			signIn(undefined, { callbackUrl: "/" })
		}

		if (createPostState.status === "error") {
			toast.error(createPostState.message)
			createPostState.errors?.forEach((error) => {
				setError(error.path as FieldPath<User>, {
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
			<div className="mb-6">
				<input type="email" {...register("email")} placeholder="Email address" className={`${input_style}`} />
				{errors["email"] && (
					<span className="text-red-500 text-xs pt-1 block">{errors["email"]?.message as string}</span>
				)}
			</div>
			<div className="mb-6">
				<input type="password" {...register("password")} placeholder="Password" className={`${input_style}`} />
				{errors["password"] && (
					<span className="text-red-500 text-xs pt-1 block">{errors["password"]?.message as string}</span>
				)}
			</div>
			<div className="mb-6">
				<input
					type="password"
					{...register("passwordConfirm")}
					placeholder="Confirm Password"
					className={`${input_style}`}
				/>
				{errors["passwordConfirm"] && (
					<span className="text-red-500 text-xs pt-1 block">{errors["passwordConfirm"]?.message as string}</span>
				)}
			</div>
			<button
				type="submit"
				style={{ backgroundColor: `${pending ? "#ccc" : "#3446eb"}` }}
				className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
				disabled={pending}
			>
				{pending ? "loading..." : "Sign Up"}
			</button>
		</form>
	)
}
