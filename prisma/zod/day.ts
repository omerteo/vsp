import * as z from "zod"
import { CompleteSchedule, RelatedScheduleModel } from "./index"

export const DayModel = z.object({
  id: z.number().int(),
  dayOfWeek: z.string(),
  scheduleId: z.number().int(),
})

export interface CompleteDay extends z.infer<typeof DayModel> {
  schedule: CompleteSchedule
}

/**
 * RelatedDayModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDayModel: z.ZodSchema<CompleteDay> = z.lazy(() => DayModel.extend({
  schedule: RelatedScheduleModel,
}))
