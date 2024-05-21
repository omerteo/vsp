import * as z from "zod"
import { CompleteEmployeeAsset, RelatedEmployeeAssetModel, CompleteSchedule, RelatedScheduleModel } from "./index"

export const EmployeeModel = z.object({
  employeeId: z.number().int(),
  name: z.string(),
  yearsExperience: z.number().int().nullish(),
  joinedOn: z.date(),
  imagePath: z.string().nullish(),
  employeeCode: z.string(),
  designationName: z.string(),
  checkedInAt: z.date().nullish(),
  checkedOutAt: z.date().nullish(),
  currentWeekHours: z.number().int().nullish(),
  lastWeekHours: z.number().int().nullish(),
  modifiedTimeStamp: z.number().int().nullish(),
  statusType: z.string().nullish(),
  statusReason: z.string().nullish(),
})

export interface CompleteEmployee extends z.infer<typeof EmployeeModel> {
  assets: CompleteEmployeeAsset[]
  schedules: CompleteSchedule[]
}

/**
 * RelatedEmployeeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEmployeeModel: z.ZodSchema<CompleteEmployee> = z.lazy(() => EmployeeModel.extend({
  assets: RelatedEmployeeAssetModel.array(),
  schedules: RelatedScheduleModel.array(),
}))
