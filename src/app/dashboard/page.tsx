import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import Home from "@/components/Home";

export default async function Dashboard() {

    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (user) {
        return <Home />

    } else {
        redirect("/login");
    }
}