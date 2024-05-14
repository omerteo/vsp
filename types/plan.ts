import { Asset } from "@prisma/client"

type By = {
    by: number
    at: string
}

export interface PlanMeta {
    id: number
    name: string
    createdBy?: number
    updated?: By
}

export interface Plan extends PlanMeta{
    sites: Asset[]    
}