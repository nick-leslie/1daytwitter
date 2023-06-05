import {Thought, User} from "@prisma/client";
interface thoughtProps {
    thought:(Thought & {User:{username:string} | null })
}

export default function ThoughtWiddget(props:thoughtProps) {
    let username = props.thought.User?.username;
    if(username == undefined) {
        username = "";
    }
    return(
        <div className={"flex flex-row border-white border-solid shadow-white rounded-lg border-2 mx-6 my-2 py-2"}>
            <div className={"flex flex-col"}>
                <div className={"flex flex-row"}>
                    <h1 className={"mx-1 text-green-600"}> {username}</h1>
                    <h1>Thought:</h1>
                </div>
            <h1 className={"mx-32 py-2"}>{props.thought.text}</h1>
            </div>
        </div>
    )

}