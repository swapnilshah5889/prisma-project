import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here

    // All Users
    const users = await prisma.user.findMany({});
    console.log(users);

    // Users with posts
    const users2 = await prisma.user.findMany({
        where: {
            id: 1
        },
        include:{
            posts:true
        }
    });
    console.log(users2);

    users2.forEach(user => {
        console.log(user.posts);
    });
}

main()
.then(async () => {
    console.log("Get Users query successful");
    await prisma.$disconnect()  
})
.catch(async (e) => {
    console.log("Errror in Get users query");
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})