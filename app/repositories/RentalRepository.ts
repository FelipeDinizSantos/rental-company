import { MovieRent } from "@prisma/client";
import { prisma } from "../prisma/client";

interface IRentalSave{
    movieId: string;
    userId: string;
};

class RentalRepository{
    async save({movieId, userId}: IRentalSave){
        await prisma.movieRent.create({
            data:{
                movieId,
                userId
            }
        })
    }

    async movieIsRented(movieId:string): Promise<MovieRent|null>{
        const movieAlredyRented = await prisma.movieRent.findFirst({
            where:{
                movieId
            }
        })

        return movieAlredyRented;
    }
}

export {RentalRepository};
