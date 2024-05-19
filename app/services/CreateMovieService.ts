import { Movie } from "@prisma/client";
import { MovieRepository } from "../repositories/MovieRepository";
import { AppError } from "../errors/AppError";

interface ICreateMovie{
    title: string;
    duration: number;
    releaseDate: string;
}

class CreateMovieService{
    private movieRepository:MovieRepository;

    constructor(){
        this.movieRepository = new MovieRepository();
    }

    async execute({title, duration, releaseDate}: ICreateMovie):Promise<Movie>{
        const alerdyExist = await this.movieRepository.getOneByTitle(title);

        if(alerdyExist){
            throw new AppError(`Movie already exist!`);    
        }

        const movie = await this.movieRepository.save({title, duration, releaseDate});
        return movie;
    }
};

export {CreateMovieService}; 