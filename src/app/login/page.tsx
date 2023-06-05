"use client"
import {submitUsername} from "@/app/login/submitUsername";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function Page() {
    const router = useRouter();

    // @ts-ignore
    const handleSub = async (event) => {
        event.preventDefault();
        await submitUsername(event.target.username.value);
        await router.push("/")
    }

    return (
        <div>
            <form onSubmit={handleSub}>
                <label htmlFor="username">Think</label>
                <input className={"text-black"} type="text" id="username" name="username" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}