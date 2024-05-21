import { create } from "zustand"
import { createWithEqualityFn } from "zustand/traditional"

interface UserInfoState {
	name: string
	email: string
	profilePicture: string
	employeeId: string
	setUserInfo: (newUserInfo: Partial<UserInfoState>) => void
}

export const useUserStore = createWithEqualityFn<UserInfoState>((set) => ({
	name: "",
	email: "",
	profilePicture: "",
	employeeId: "",
	setUserInfo: (newUserInfo) => set((state) => ({ ...state, ...newUserInfo })),
}))
