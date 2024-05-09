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
	name: string
	typeId: number
}
