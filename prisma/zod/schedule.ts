import * as z from "zod"
import { CompleteAsset, RelatedAssetModel, CompleteUser, RelatedUserModel, CompleteDay, RelatedDayModel } from "./index"

export const ScheduleModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  assetId: z.number().int(),
  userId: z.string(),
  startDate: z.date(),
  endDate: z.date(),
})

export interface CompleteSchedule extends z.infer<typeof ScheduleModel> {
  asset: CompleteAsset
  user: CompleteUser
  days: CompleteDay[]
}

/**
 * RelatedScheduleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedScheduleModel: z.ZodSchema<CompleteSchedule> = z.lazy(() => ScheduleModel.extend({
  asset: RelatedAssetModel,
  user: RelatedUserModel,
  days: RelatedDayModel.array(),
}))
