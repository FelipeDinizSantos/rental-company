import { prisma } from "../prisma/client";
import { User } from "@prisma/client";

interface IUserSave{
    name:string;
    email:string;
}

class UserRepository{
    async save({name, email}:IUserSave): Promise<User>{
        const user = await prisma.user.create({
            data:{
                name,
                email
            }
        })
        
        return user;
    }

    async getOneByEmail(email:string):Promise<User|null>{
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        });

        return user;
    }

    async getOneById(userId:string):Promise<User|null>{
        const user = await prisma.user.findUnique({
            where:{
                id: userId
            }
        });

        return user;
    }

    async getMany(){
        const users = prisma.user.findMany({
            include:{
                movie_rent:{
                    select:{
                        movie:{
                            select: {
                                title: true
                            }
                        }
                    }
                }
            }
        });

        return users;
    }
}

export {UserRepository};