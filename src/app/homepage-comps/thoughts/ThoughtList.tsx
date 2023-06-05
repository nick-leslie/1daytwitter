import {Thought} from "@prisma/client";
import ThoughtWiddget from "@/app/homepage-comps/thoughts/ThoughtWiddget";
import {GetThoughts} from "@/app/api/think/route";
export default async function ThoughtList() {
    let thoughts:  ((Thought & {User:{username:string} | null }))[] = await GetThoughts();
    return(
        <div className={"flex flex-col"}>
            {thoughts.map((thought) => {
                return <ThoughtWiddget key={thought.id} thought={thought}></ThoughtWiddget>
            })}
        </div>
    )
}