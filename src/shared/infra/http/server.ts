import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "../typeorm/migrations";
import "../../container";
import "../../infra/typeorm/migrations/index";
//import createConnection from "../typeorm/migrations";
import router from "./routes";
import AppError from "../../Errors/AppError";

//createConnection();

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(Number(err.statusCode)).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "Error",
      message: `internal error server ${err.message}`,
    });
  }
);

app.listen(3333, () => {
  console.log("Server is running on port:3333");
});

export default app;
