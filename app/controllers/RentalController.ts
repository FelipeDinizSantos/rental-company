import { Request, Response } from "express";
import { CreateRentalService } from "../services/CreateRentalService";

const createRentalService = new CreateRentalService();

class RentalController{
    async store(req:Request, res:Response){
        const {userId, movieId} = req.body;

        await createRentalService.execute({movieId, userId});
        res.status(201).json({status: 'Film successfully rented!'});
    }
}

export { RentalController };