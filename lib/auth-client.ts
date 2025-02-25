import { createAuthClient } from "better-auth/react";
export const { signIn, signUp, signOut, useSession } = createAuthClient({
	baseURL:
		process.env.NODE_ENV === "production"
			? "https://todo.com/"
			: "http://localhost:3000",
});