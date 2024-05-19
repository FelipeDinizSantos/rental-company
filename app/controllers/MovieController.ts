import { Request, Response } from "express";
import { CreateMovieService } from "../services/CreateMovieService";
import { GetMovieListOrderByReleaseDateService } from "../services/GetMovieListOrderByReleaseDateService";

const createMovieService = new CreateMovieService();
const getMovieListOrderByReleaseDateService = new GetMovieListOrderByReleaseDateService();

class MovieController{
    async store(req:Request, res:Response){
        const {title, duration, releaseDate} = req.body;

        const movie = await createMovieService.execute({title, duration, releaseDate});

        res.status(200).json({
            status: 'ok',
            movie: movie
        });
    }

    async index(req:Request, res:Response){
        const moviesList = await getMovieListOrderByReleaseDateService.execute();
        
        res.status(200).json({
            movies: moviesList
        })
    }
}

export {MovieController};