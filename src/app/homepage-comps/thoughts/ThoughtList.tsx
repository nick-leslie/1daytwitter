import {Thought} from "@prisma/client";
import ThoughtWiddget from "@/app/homepage-comps/thoughts/ThoughtWiddget";
import fetchThoughts from "@/app/homepage-comps/thoughts/fetchThink";
export default async function ThoughtList() {
    let thoughts:  (Thought & {User:{username:string}})[] = await fetchThoughts();
    return(
        <div className={"flex flex-col"}>
            {thoughts.map((thought) => {
                return <ThoughtWiddget key={thought.id} thought={thought}></ThoughtWiddget>
            })}
        </div>
    )
}