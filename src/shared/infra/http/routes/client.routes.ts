import { Router } from "express";
import CreateCityController from "../../../../modules/client/useCase/CreateClientController";

const clientRoute = Router();

const createClientController = new CreateCityController();

clientRoute.post("/", createClientController.handle);
clientRoute.get("");

export default clientRoute;
