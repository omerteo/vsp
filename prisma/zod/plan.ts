import * as z from "zod"

export const PlanModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  name: z.string(),
  sites: z.string().nullish(),
  map: z.string().nullish(),
})
