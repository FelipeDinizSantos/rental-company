import { User } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";

class GetAllUsersService{
    private userRespository:UserRepository;

    constructor(){
        this.userRespository = new UserRepository();
    }

    async execute(): Promise<User[]>{
        const users = await this.userRespository.getMany();

        return users;
    }
}

export { GetAllUsersService };