import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here

    // All Users
    const users = await prisma.post.update({
        where: {
            id:1
        },
        data: {
            published:false
        }
    });
    console.log(users);

}

main()
.then(async () => {
    console.log("Update Post query successful");
    await prisma.$disconnect()  
})
.catch(async (e) => {
    console.log("Errror in Update Post query");
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})