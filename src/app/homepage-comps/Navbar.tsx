import Link from "next/link";
import {cookies} from "next/headers";
import {User} from "@prisma/client";
import {GetUser} from "@/app/api/user/route";
``
export default async function Navbar() {
    let id = cookies().get("userid")?.value;
    let username = ""
    if (id != undefined) {
        let user:User | undefined = await GetUser(parseInt(id));
        if(user != undefined) {
            username = user.username;
        }
    }
    return (
        <div className={"flex flex-row-reverse"}>
            <Link className={"basis-1/8"} href={"/login"}>Login</Link>
            <h1 className={"basis-1/2 text-white"}>{username}</h1>
            <Link className={"basis-1/2"} href={"/think"}>Think </Link>
            <Link className={"basis-1/8"} href={"/"}>home</Link>
        </div>);
}