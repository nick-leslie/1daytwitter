"use client"
import {submitThink} from "@/app/think/submitThink";
import { getCookie } from 'cookies-next';
export default function Page() {
    // @ts-ignore
    const handleSub = async (event) => {
        event.preventDefault();
        let thought = event.target.think.value;
        let userId:boolean | string | undefined = getCookie('userid')?.valueOf(); // => undefined
        if(userId != undefined && typeof userId === "string") {
            await submitThink(thought, parseInt(userId));
        }
    }

    return(<div>
        <form onSubmit={handleSub}>
            <label htmlFor="username">Think</label>
            <input className={"text-black"} type="text" id="think" name="think" required />
            <button type="submit">Submit</button>
        </form>
    </div>);
}