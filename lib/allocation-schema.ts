import { object, string, date, union, boolean, TypeOf } from "zod";

export const allocationScheduleSchema = object({
  type: union([string(), boolean()]),
  details: string().nullable()
});

export const createAssetAllocationSchema = object({
  assetId: string(),
  userId: string(),
  allocatedBy: string(),
  allocatedAt: date(),
  schedule: allocationScheduleSchema
});

export type CreateAssetAllocationInput = TypeOf<typeof createAssetAllocationSchema>;
