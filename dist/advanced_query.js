"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
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
        const users = yield prisma.user.findMany({
            where: {
                email: {
                    endsWith: 'gmail.com',
                },
                posts: {
                    some: {
                        published: true,
                    }
                }
            },
            include: {
                posts: {
                    where: {
                        published: true
                    }
                }
            }
        });
        users.forEach(user => {
            console.log(user);
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Get Users query successful");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Errror in Get users query");
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));