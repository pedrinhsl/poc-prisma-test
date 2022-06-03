import { GetAllUsersUseCase } from './GetAllUsersUseCase';
import { Request, Response } from "express";

export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const getAllUsersUseCase = new GetAllUsersUseCase();

    const result = await getAllUsersUseCase.execute();

    return res.status(201).json(result);
  }
}