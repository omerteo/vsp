import * as z from "zod"
import { CompleteAsset, RelatedAssetModel, CompleteEmployee, RelatedEmployeeModel, CompleteDay, RelatedDayModel } from "./index"

export const ScheduleModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  assetId: z.number().int(),
  employeeId: z.number().int(),
  startDate: z.date(),
  endDate: z.date().nullish(),
  scheduleType: z.string(),
})

export interface CompleteSchedule extends z.infer<typeof ScheduleModel> {
  asset: CompleteAsset
  employee: CompleteEmployee
  days: CompleteDay[]
}

/**
 * RelatedScheduleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedScheduleModel: z.ZodSchema<CompleteSchedule> = z.lazy(() => ScheduleModel.extend({
  asset: RelatedAssetModel,
  employee: RelatedEmployeeModel,
  days: RelatedDayModel.array(),
}))
