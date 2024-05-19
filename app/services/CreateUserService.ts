import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "@prisma/client";

interface ICreateUser{
    name: string;
    email: string;
}

class CreateUserService{
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepository();
    }

    async execute({name, email}:ICreateUser):Promise<User>{
        const alreadyExist = await this.userRepository.getOneByEmail(email);

        if(alreadyExist){
            throw new AppError('User alredy exists!');
        }

        const user = await this.userRepository.save({name, email});
        return user;
    }
};

export {CreateUserService};