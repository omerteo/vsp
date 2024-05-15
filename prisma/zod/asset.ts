import * as z from "zod"

export const AssetModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  name: z.string().nullish(),
  type: z.number().int(),
})
