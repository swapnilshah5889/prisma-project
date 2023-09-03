import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here

    await prisma.user.create({
        data: {
            email:'swapnil@gmail.com',
            name:'Swapnil',
        }
    });
}

main()
.then(async () => {
    console.log("Create user query successful");
    await prisma.$disconnect()  
})
.catch(async (e) => {
    console.log("Errror in create user query");
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})