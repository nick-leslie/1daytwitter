import {PrismaClient} from "@prisma/client";

export async function getUser(id:number) {
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