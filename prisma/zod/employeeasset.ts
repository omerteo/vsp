import * as z from "zod"
import { CompleteEmployee, RelatedEmployeeModel, CompleteAsset, RelatedAssetModel, CompleteSchedule, RelatedScheduleModel } from "./index"

export const EmployeeAssetModel = z.object({
  employeeId: z.number().int(),
  assetId: z.number().int(),
  scheduleId: z.number().int().nullish(),
})

export interface CompleteEmployeeAsset extends z.infer<typeof EmployeeAssetModel> {
  employee: CompleteEmployee
  asset: CompleteAsset
  schedule?: CompleteSchedule | null
}

/**
 * RelatedEmployeeAssetModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEmployeeAssetModel: z.ZodSchema<CompleteEmployeeAsset> = z.lazy(() => EmployeeAssetModel.extend({
  employee: RelatedEmployeeModel,
  asset: RelatedAssetModel,
  schedule: RelatedScheduleModel.nullish(),
}))
