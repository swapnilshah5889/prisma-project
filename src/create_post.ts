import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



async function main() {
    // ... you will write your Prisma Client queries here

    await prisma.post.create({
        data: {
            title:'Post title 2',
            content:"Post content sdjflskdj",
            published:true,
            authorId:1
        }
    });
}

main()
.then(async () => {
    console.log("Create Post query successful");
    await prisma.$disconnect()  
})
.catch(async (e) => {
    console.log("Errror in create Post query");
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})