import { db } from '@/lib/db'
import { cache } from 'react'

export const getPlan = cache(async (id: number) => {
  return db.plan.findUnique({ where: { id: id } })
})

export const getAssetCatalog = cache(async () => {
  const items = await db.assetType.findMany()
  return items
})