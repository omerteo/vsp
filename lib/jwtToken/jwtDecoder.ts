import jwt from "jsonwebtoken"

const decodeJWT = (token: any) => {
	try {
		return jwt.decode(token)
	} catch (error) {
		console.error("Error decoding JWT:", error)
		return null
	}
}

export default decodeJWT
