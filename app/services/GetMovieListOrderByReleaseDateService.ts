import { Movie } from "@prisma/client";
import { MovieRepository } from "../repositories/MovieRepository";

class GetMovieListOrderByReleaseDateService{
    private movieRepository:MovieRepository;

    constructor(){
        this.movieRepository = new MovieRepository();
    }

    async execute(): Promise<Movie[]>{
        const movies = await this.movieRepository.getManyOrderByReleaseDate();
        return movies;
    }
}

export { GetMovieListOrderByReleaseDateService };