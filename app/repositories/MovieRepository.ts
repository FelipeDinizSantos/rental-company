import { Movie } from "@prisma/client";
import { prisma } from "../prisma/client";

interface IMovieSave{
    title: string;
    duration: number;
    releaseDate: string;
}

class MovieRepository{
    async save({title, duration, releaseDate}: IMovieSave){
        const movie = await prisma.movie.create({
            data:{
                title,
                duration,
                release_date: releaseDate
            }
        })

        return movie;
    }

    async getOneByTitle(title:string):Promise<Movie|null>{
        const movie = await prisma.movie.findUnique({
            where:{
                title
            }
        });

        return movie;
    }

    async getOneById(id:string): Promise<Movie|null>{
        const movie = await prisma.movie.findUnique({
            where:{
                id
            }
        })

        return movie;
    }

    async getManyOrderByReleaseDate(): Promise<Movie[]>{
        const movies = await prisma.movie.findMany({
            orderBy:{
                release_date: "desc"
            },
            include:{
                movie_rent: {
                    select:{
                        user: {
                            select:{
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            }
        })

        return movies;
    }
}

export {MovieRepository};