import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "@prisma/client";

interface ICreateUser{
    name: string;
    email: string;
}

const userRepository = new UserRepository();

class CreateUserService{
    async execute({name, email}:ICreateUser):Promise<User>{
        const alredyExist = await userRepository.getUniqueByEmail(email);

        if(alredyExist){
            throw new AppError('User alredy exists!');
        }

        const user = await userRepository.save({name, email});
        return user;
    }
};

export {CreateUserService};