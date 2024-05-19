import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { movieRoutes } from "./movieRoutes";
const routes = Router();

routes.use('/users', userRoutes);
routes.use('/movies', movieRoutes);

export {routes};