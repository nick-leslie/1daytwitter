import {NextRequest, NextResponse} from "next/server";
import {PrismaClient, Thought, User} from "@prisma/client";

export function GET(request:NextRequest) {
    const prisma = new PrismaClient();
    return GetThoughts().then((thoughts) => {
        return NextResponse.json(thoughts);
    }).catch(async (err) => {
        await prisma.$disconnect();

        return NextResponse.json("something went wrong " + err)
    });
}

export async function GetThoughts() {
    const prisma = new PrismaClient();
    return prisma.thought.findMany(
        {include: {
                User: { select: { username:true }, }
            }
        }).then(async (thoughts)=> {
            await prisma.$disconnect();
            return thoughts;
    });
}

export async function POST(request:NextRequest) {
    const prisma = new PrismaClient();
    try {
        let createThought:Thought = await request.json();
        console.log(createThought);
        const createdThought = await prisma.thought.create({data:createThought})
        await prisma.$disconnect();
        return NextResponse.json("thinking");
    } catch (err) {
        await prisma.$disconnect();
        console.log(err)
        return NextResponse.json("bad request")
    }
}