import { Asset } from "@prisma/client"
import { Created } from "."
export interface PlanMeta extends Created {
    id: number
    title: string
}

export interface Plan extends PlanMeta {
    sites: Asset[]
}