import { createAuthClient } from "better-auth/react"

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const authClient = createAuthClient({
    baseURL: backendUrl // The base URL of your auth server
})