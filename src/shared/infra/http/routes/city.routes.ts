import { Router } from "express";
import CreateCityController from "../../../../modules/city/useCase/CreateCity/CreateCity";

const cityRoute = Router();

const createCityController = new CreateCityController();

cityRoute.post("/", createCityController.handle);

export default cityRoute;
