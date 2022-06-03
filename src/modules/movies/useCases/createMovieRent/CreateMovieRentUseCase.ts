import { prisma } from './../../../../prisma/client';
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";
import { AppError } from '../../../../errors/error';

export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
    //verificar se o filme existe
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId
      },
    });

    if (!movieExists) {
      throw new AppError("Movie does not exists!");
    }
    
    //verificiar se o filme nao esta alugado
    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId: movieId,
      }
    })

    if (movieAlreadyRented) {
      throw new AppError("Movie already rented!");
    }

    //verificar se o usuario existe
    const userExists = await prisma.user.findUnique({
      where: { 
        id: userId 
      },
    })

    if (!userExists) {
      throw new AppError("User does not exists!");
    }

    //criar a locação
    await prisma.movieRent.create({
      data: {
        movieId,
        userId
      }
    });
  }
}