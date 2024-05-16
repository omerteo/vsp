import { db } from '@/lib/db'
import { cache } from 'react'

export const getAllPlans = cache(async () => {
  return await db.plan.findMany({
    select: {
      id: true,
      name: true,
    },
  })
})

export const getPlan = cache(async (id: number) => {
  return db.plan.findUnique({ where: { id: id } })
})

export const getAssetCatalog = cache(async () => {
  const items = await db.assetType.findMany()
  return items
})

export const getAssets = cache(async () => {
  const items = await db.asset.findMany()
  return items
})