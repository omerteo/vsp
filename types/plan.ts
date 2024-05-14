import { Asset } from "@prisma/client"

type By = {
    by: number
    at: string
}

export interface PlanMeta {
    id: number
    title: string
    created?: By
    updated?: By
}

export interface Plan extends PlanMeta {
    sites: Asset[]
}