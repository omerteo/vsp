import * as z from "zod"
import { CompleteAsset, RelatedAssetModel, CompleteDay, RelatedDayModel, CompleteEmployeeAsset, RelatedEmployeeAssetModel, CompleteEmployee, RelatedEmployeeModel } from "./index"

export const ScheduleModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  assetId: z.number().int(),
  startDate: z.date(),
  endDate: z.date().nullish(),
  scheduleType: z.string(),
  employeeId: z.number().int(),
})

export interface CompleteSchedule extends z.infer<typeof ScheduleModel> {
  asset: CompleteAsset
  days: CompleteDay[]
  allocations: CompleteEmployeeAsset[]
  employee: CompleteEmployee
}

/**
 * RelatedScheduleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedScheduleModel: z.ZodSchema<CompleteSchedule> = z.lazy(() => ScheduleModel.extend({
  asset: RelatedAssetModel,
  days: RelatedDayModel.array(),
  allocations: RelatedEmployeeAssetModel.array(),
  employee: RelatedEmployeeModel,
}))
