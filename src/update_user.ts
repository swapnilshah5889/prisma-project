import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here

    // All Users
    const users = await prisma.user.update({
        where: {
            id:1
        },
        data: {
            name: 'Swapnil Shah'
        }
    });
    console.log(users);

}

main()
.then(async () => {
    console.log("Update Users query successful");
    await prisma.$disconnect()  
})
.catch(async (e) => {
    console.log("Errror in Update users query");
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})