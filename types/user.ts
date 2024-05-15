export interface User {
	name: string
	email: string
	password: string
	passwordConfirm: string
}

export interface AssetType {
	name: string
}

export interface Asset {
	name: string | null
	typeId: number
	userId: string | null
	id?: number
}
