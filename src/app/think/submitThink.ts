export const submitThink = async (thought:String,userid:number) => {
    const jsonData = JSON.stringify({
        "userId":userid,
        "text":thought
    });


    let responce = await fetch('/api/think', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    });
    console.log(await responce.json())
}