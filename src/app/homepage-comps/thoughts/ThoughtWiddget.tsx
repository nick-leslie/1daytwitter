import {Thought, User} from "@prisma/client";
interface thoughtProps {
    thought:(Thought & {User:{username:string}});
}

export default function ThoughtWiddget(props:thoughtProps) {
    return(
        <div className={"flex-col flex-row"}>
            <h1>{props.thought.User.username} :{props.thought.text}</h1>
        </div>
    )

}