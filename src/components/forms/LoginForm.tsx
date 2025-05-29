'use client'

import { signIn } from "next-auth/react"
import { FormEvent } from "react"
import { redirect } from "next/navigation";

export default function LoginForm() {

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const signInData = await signIn("credentials", {
                email: email,
                password: password,
            })
            console.log(signInData, "Logou");
            redirect("/dashboard");
        }
        catch (ex) {
            console.error(ex, "Erro");
        }
    }

    return <div className="login-screen">
        <div className="login-title">
            <h1>Project Management</h1>
            <h5>Sign in to your account</h5>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
            <div>
                <label htmlFor="emailLogin">E-mail</label>
                <input id="emailLogin" name="email" placeholder="Enter your email" type="text" />
            </div>
            <div>
                <label htmlFor="passwordLogin">Password</label>
                <input id="passwordLogin" name="password" placeholder="Enter your password" type="password" />
            </div>
            <div className="login-extra">
                <span><input type="checkbox" /> Remember me</span>
                <span>Forgot password?</span>
            </div>
            <button type="submit">Sign in</button>
        </form>
        <span>Don't have an account? Create account</span>
    </div>
}