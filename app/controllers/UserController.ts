import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class UserController{
    async store(req:Request, res:Response){
        const {name, email} = req.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email});

        res.status(201).json({user:user});
    }
};

export {UserController};