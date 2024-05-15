import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const SessionModel = z.object({
  id: z.string(),
  userId: z.string().nullish(),
  sessionToken: z.string(),
  accessToken: z.string().nullish(),
  expires: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteSession extends z.infer<typeof SessionModel> {
  user?: CompleteUser | null
}

/**
 * RelatedSessionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSessionModel: z.ZodSchema<CompleteSession> = z.lazy(() => SessionModel.extend({
  user: RelatedUserModel.nullish(),
}))
