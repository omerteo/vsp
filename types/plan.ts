type By = {
    by: number
    at: string
}

type AssetProps = {
    span?: number | null | undefined
    x?: number
    y?: number
    width?: number
    height?: number
    fill?: string
}

export type Asset = {
    id: number
    assetType: number
    label: string
    props: AssetProps
    assets?: Asset[]
    editable?: boolean
    assignable?: boolean
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