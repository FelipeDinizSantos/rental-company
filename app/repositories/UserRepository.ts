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

    async getUniqueByEmail(email:string):Promise<User|null>{
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        });

        return user;
    }
}

export {UserRepository};