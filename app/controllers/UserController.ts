import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { GetAllUsersService } from "../services/GetAllUsersService";

const createUserService = new CreateUserService();
const getAllUsersService = new GetAllUsersService(); 

class UserController{
    async store(req:Request, res:Response){
        const {name, email} = req.body;

        const user = await createUserService.execute({name, email});

        res.status(201).json({user:user});
    }

    async index(req:Request, res:Response){
        const users = await getAllUsersService.execute();

        res.status(200).json({users})
    }
};

export {UserController};