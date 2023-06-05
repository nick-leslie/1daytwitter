import {NextRequest, NextResponse} from "next/server";
import {PrismaClient, User} from "@prisma/client";
import {json} from "stream/consumers";
import {getUser} from "@/app/api/user/getUser";

export async function POST(request:NextRequest) {
    let user = await request.json();
    return NextResponse.json(getUser(user.id));
}
