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
    type: number
    name: string
    props: AssetProps
    assets?: Asset[]
    editable?: boolean
    assignable?: boolean
    createdAt?: string
}