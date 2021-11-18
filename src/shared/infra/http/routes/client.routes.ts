import { Router } from "express";
import CreateClientController from "../../../../modules/client/useCase/CreateClientController";

const clientRoute = Router();

const createClientController = new CreateClientController();

clientRoute.post("/", createClientController.handle);

export default clientRoute;
