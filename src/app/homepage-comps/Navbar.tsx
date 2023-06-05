import Link from "next/link";
import {cookies} from "next/headers";
import {fetchUser} from "@/app/homepage-comps/thoughts/fetchUser";
import {User} from "@prisma/client";
``
export default async function Navbar() {
    let id = cookies().get("userid")?.value;
    let username = ""
    if (id != undefined) {
        let user:User = await fetchUser(parseInt(id));
        username = user.username;
    }
    return (
        <div className={"flex flex-row-reverse"}>
            <Link className={"basis-1/8"} href={"/login"}>Login</Link>
            <h1 className={"basis-1/2 text-white"}>{username}</h1>
            <Link className={"basis-1/2"} href={"/think"}>Think </Link>
            <Link className={"basis-1/8"} href={"/"}>home</Link>
        </div>);
}