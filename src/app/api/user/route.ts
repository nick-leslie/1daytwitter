import {NextRequest, NextResponse} from "next/server";
import {PrismaClient, User} from "@prisma/client";
import {json} from "stream/consumers";

export async function POST(request:NextRequest) {
    console.log("yooo")
    const prisma = new PrismaClient();
    let user = await request.json();
    console.log(user.id);
    try {
        let fetchedUser = await prisma.user.findFirstOrThrow({
            where: {
                id:user.id
            }});
        await prisma.$disconnect();
        return NextResponse.json(fetchedUser);
    } catch (err) {
        console.log("failed to fetch", err);
        await prisma.$disconnect();
        return NextResponse.json("failed to fetch")
    }
}