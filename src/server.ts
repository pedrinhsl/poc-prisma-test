import "express-async-errors";
import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes';
import { AppError } from "./errors/error";

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
})

app.listen(3333, () => console.log('server is running on port 3333'));
