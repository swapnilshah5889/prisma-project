import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here

    // Users who has at least one published post
    // Get all posts of such users
    // const users = await prisma.user.findMany({
    //     where: {
    //         email: {
    //             endsWith:'gmail.com',
    //         },
    //         posts:{
    //             some:{
    //                 published: true,
    //             }
    //         }
    //     }
    // });

    // Users who has at least one published post
    // Get only published posts of such users
    const users = await prisma.user.findMany({
        where: {
            email: {
                endsWith:'gmail.com',
            },
            posts:{
                some:{
                    published: true,
                }
            }
        },
        include:{
            posts: {
                where: {
                    published:true
                }
            }
        }
    });
    
    users.forEach(user => {
        console.log(user);
    })
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