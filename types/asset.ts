import { Created } from "."

type AssetProps = {
    span?: number | null | undefined
    x?: number
    y?: number
    width?: number
    height?: number
    fill?: string
}

export interface Asset extends Created {
    id: number
    type: number
    props?: AssetProps
    assets?: Asset[]
    editable?: boolean
    assignable?: boolean
    isolated?: boolean
    label?: string
    allocation?: any[]
}