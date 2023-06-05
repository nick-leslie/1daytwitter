import Link from "next/link";
import {cookies} from "next/headers";
import {User} from "@prisma/client";
import {getUser} from "@/app/api/user/getUser";
``
export default async function Navbar() {
    let id = cookies().get("userid")?.value;
    let username = ""
    if (id != undefined) {
        let user:User | undefined = await getUser(parseInt(id));
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