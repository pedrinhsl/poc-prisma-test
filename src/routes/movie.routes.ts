import { Router } from "express";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController";
import { CreateMovieController } from './../modules/movies/useCases/createMovie/CreateMovieController';

const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateUseCase = new GetMoviesByReleaseDateController();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateUseCase.handle);
movieRoutes.post("/rent", createMovieRentController.handle)

export { movieRoutes };