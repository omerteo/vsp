import { TypeOf, number, object, string } from "zod"

export const assetSchema = object({
	name: string({ required_error: "Name is required" }).min(1, "Name is required"),
	typeId: number({ required_error: "Type is required" }),
})

export const assetTypeSchema = object({
	name: string({ required_error: "Name is required" }).min(1, "Name is required"),
})

export type AssetInput = TypeOf<typeof assetSchema>
export type AssetTypeInput = TypeOf<typeof assetTypeSchema>
