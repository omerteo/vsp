import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteSchedule, RelatedScheduleModel } from "./index"

export const AssetModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  name: z.string(),
  typeId: z.number().int(),
  userId: z.string().nullish(),
})

export interface CompleteAsset extends z.infer<typeof AssetModel> {
  user?: CompleteUser | null
  schedules: CompleteSchedule[]
}

/**
 * RelatedAssetModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAssetModel: z.ZodSchema<CompleteAsset> = z.lazy(() => AssetModel.extend({
  user: RelatedUserModel.nullish(),
  schedules: RelatedScheduleModel.array(),
}))
