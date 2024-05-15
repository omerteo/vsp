import * as z from "zod"

export const AssetTypeModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  name: z.string(),
})
