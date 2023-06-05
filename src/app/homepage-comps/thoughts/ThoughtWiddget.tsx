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
        <div className={"flex-col flex-row"}>
            <h1>{username} :{props.thought.text}</h1>
        </div>
    )

}