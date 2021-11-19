import { Router } from "express";
import CreateCityController from "../../../../modules/city/useCase/CreateCity/CreateCity";
import ListCityController from "../../../../modules/city/useCase/listCity/ListCityController";

const cityRoute = Router();

const createCityController = new CreateCityController();
const listCityController = new ListCityController();

cityRoute.post("/", createCityController.handle);
cityRoute.get("/", listCityController.handle);

export default cityRoute;
