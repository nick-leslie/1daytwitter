import {User} from "@prisma/client";

export async function fetchUser(id:number):Promise<User> {
    let payload = {id:id};
    let response = await fetch('http://localhost:3000/api/user',{
        method:"POST",
        body: JSON.stringify(payload)
    });
    return await response.json();
}