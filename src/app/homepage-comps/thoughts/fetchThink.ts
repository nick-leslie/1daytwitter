import {Thought} from "@prisma/client";

export default async function fetchThoughts() {
    let response = await fetch('http://localhost:3000/api/think', {
        method: "GET",
        next: { revalidate: 1}
    });
    let data:(Thought & {User:{username:string}})[] = await response.json();
    return data;
}