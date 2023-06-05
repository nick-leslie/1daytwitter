// @ts-ignore
import Router from 'next/router'



export const submitUsername = async (username:String) => {
    const jsonData = JSON.stringify({
        "username":username
    });


    let responce = await fetch('/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    });
    console.log(await responce.json())
}

interface hello {
    name:string
}
