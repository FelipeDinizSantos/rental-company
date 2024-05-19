import { AppError } from "../errors/AppError";
import { MovieRepository } from "../repositories/MovieRepository";
import { RentalRepository } from "../repositories/RentalRepository";
import { UserRepository } from "../repositories/UserRepository";

interface ICreateRental{
    movieId: string;
    userId: string;
}

class CreateRentalService{
    private rentalRepository:RentalRepository;
    private movieRepository:MovieRepository;
    private userRepository:UserRepository;

    constructor(){
        this.rentalRepository = new RentalRepository();
        this.movieRepository = new MovieRepository();
        this.userRepository = new UserRepository();
    }

    async execute({movieId, userId}:ICreateRental){
        const movieExist = this.movieRepository.getOneById(movieId);

        if(!movieExist){
            throw new AppError("Movie doesn't exist!");
        }

        const movieAlredyRented = await this.rentalRepository.movieIsRented(movieId);

        if(movieAlredyRented){
            throw new AppError('Movie Already Rented!')
        }

        const userExist = await this.userRepository.getOneById(userId);

        if(!userExist){
            throw new AppError("User doesn't exist!")
        }

        await this.rentalRepository.save({movieId, userId});
    }


}

export {CreateRentalService};