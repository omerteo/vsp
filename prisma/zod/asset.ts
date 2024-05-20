import * as z from "zod"
import { CompleteSchedule, RelatedScheduleModel, CompleteEmployee, RelatedEmployeeModel } from "./index"

export const AssetModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  name: z.string(),
  typeId: z.number().int(),
  employeeId: z.number().int(),
})

export interface CompleteAsset extends z.infer<typeof AssetModel> {
  schedules: CompleteSchedule[]
  employee: CompleteEmployee
}

/**
 * RelatedAssetModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAssetModel: z.ZodSchema<CompleteAsset> = z.lazy(() => AssetModel.extend({
  schedules: RelatedScheduleModel.array(),
  employee: RelatedEmployeeModel,
}))
