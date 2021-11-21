import { Router } from "express";
import CreateCityController from "../../../../modules/city/useCase/CreateCity/CreateCity";
import ListCityController from "../../../../modules/city/useCase/listCity/ListCityController";
import ListStateController from "../../../../modules/city/useCase/listCity/ListStateController";

const cityRoute = Router();

const createCityController = new CreateCityController();
const listCityController = new ListCityController();
const listStateController = new ListStateController();

cityRoute.post("/", createCityController.handle);
cityRoute.get("/", listCityController.handle);
cityRoute.get("/state", listStateController.handle);

export default cityRoute;
