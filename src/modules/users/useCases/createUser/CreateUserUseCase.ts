import { User } from "@prisma/client";
import { AppError } from "../../../../errors/error";
import { prisma } from "../../../../prisma/client";
import { CreateUserDto } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDto): Promise<User> {
    // Verificar se o usuario ja existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
      // erro
    }

    // criar o usuario
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    return user;
  }
}