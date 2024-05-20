export function windowIsAvailable() {
	return typeof window !== "undefined"
}

export function getLocalStorageItem(key: any) {
	return windowIsAvailable() && window.localStorage.getItem(key)
}

export function setLocalStorageItem(key: any, value: any) {
	return windowIsAvailable() && window.localStorage.setItem(key, value)
}

export function deleteLocalStorageItem(key: any) {
	return windowIsAvailable() && window.localStorage.removeItem(key)
}
