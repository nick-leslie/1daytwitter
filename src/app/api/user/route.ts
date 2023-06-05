import {NextRequest, NextResponse} from "next/server";
import {PrismaClient, User} from "@prisma/client";
import {json} from "stream/consumers";

export async function POST(request:NextRequest) {
    let user = await request.json();
    return NextResponse.json(GetUser(user.id));
}

export async function GetUser(id:number) {
    const prisma = new PrismaClient();
    try {
        let fetchedUser = await prisma.user.findFirstOrThrow({
            where: {
                id:id
            }});
        await prisma.$disconnect();
        return fetchedUser;
    } catch (err) {
        console.log("failed to fetch", err);
        await prisma.$disconnect();
        return undefined;
    }
}