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

export interface Plan {
    id: number
    title?: string
    sites: Asset[]
    createdBy?: number
    updated?: By
}