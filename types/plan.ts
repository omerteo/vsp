import { Asset as MapAsset } from "./asset"
import { Created } from "."
export interface PlanMeta extends Created {
    id: number
    title: string
}

export interface Plan extends PlanMeta {
    sites: MapAsset[]
    assetMapping: {[key: number]: number}
}