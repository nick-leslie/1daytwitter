import {NextRequest, NextResponse} from "next/server";
import {PrismaClient, User} from '@prisma/client'
import {cookies} from "next/headers";


export async function POST(request:NextRequest) {
    const prisma = new PrismaClient();
    try {
        let reqJson = await request.json();
        console.log(reqJson)
        let calledUser:User = reqJson;
        let user = await prisma.user.findFirst({where: {
                username:calledUser.username,
            }})
        if(user == null) {
            user = await prisma.user.create({data: calledUser})
        }
        let id = user.id.toString();
        console.log(id);
        cookies().set("userid",id);
        await prisma.$disconnect();
        return NextResponse.json("success");
    } catch (err) {
        await prisma.$disconnect();
        console.log(err);
        return NextResponse.json("bad request")
    }
}