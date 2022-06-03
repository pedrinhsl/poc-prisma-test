import { Router } from "express";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";
import { CreateUserController } from './../modules/users/useCases/createUser/CreateUserController';

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);

export { userRoutes };