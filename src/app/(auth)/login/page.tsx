
import LoginForm from "@/components/forms/LoginForm";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function Login() {

    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (user) {
        redirect("/dashboard");
    } else {
        return <div className="home-screen">
            <div className="login-page">
                <div className="container">
                    <LoginForm />
                </div>
            </div>
        </div>
    }
}