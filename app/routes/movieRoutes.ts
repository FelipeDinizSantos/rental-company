import { Router } from "express";
import { MovieController } from "../controllers/MovieController";
import { RentalController } from "../controllers/RentalController";

const movieRoutes = Router();
const movieController = new MovieController();
const rentalController = new RentalController();

movieRoutes.get('/', movieController.index);

movieRoutes.post('/', movieController.store);
movieRoutes.post('/rentals', rentalController.store);

export {movieRoutes};