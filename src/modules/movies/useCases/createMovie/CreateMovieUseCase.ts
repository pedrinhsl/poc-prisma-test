import { Movie } from "@prisma/client";
import { AppError } from "../../../../errors/error";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDto } from "../../dtos/CreateMovieDTO";

export class CreateMovieUseCase {
  async execute({ 
    title, 
    duration, 
    release_date 
  }: CreateMovieDto): Promise<Movie> {
    // Verificar se o filme ja existe
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title
      }
    });

    if (movieAlreadyExists) {
      throw new AppError("Movie already exists!");
      // erro
    }

    // criar o usuario
    const movie  = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date
      }
    });

    return movie;
  }
}