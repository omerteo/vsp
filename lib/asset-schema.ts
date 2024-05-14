import { TypeOf, number, object, string } from "zod"

export const assetSchema = object({
	name: string({ required_error: "Name is required" }).min(1, "Name is required"),
	type: string({ required_error: "Type Id is required" }),
})

export const assetTypeSchema = object({
	name: string({ required_error: "Name is required" }).min(1, "Name is required"),
})

export type AssetInput = TypeOf<typeof assetSchema>
export type AssetTypeInput = TypeOf<typeof assetTypeSchema>
