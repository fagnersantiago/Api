import { Router } from "express";
import CreateClientController from "../../../../modules/client/useCase/createClient/CreateClientController";
import DeleteClienteController from "../../../../modules/client/useCase/deleteClient/DeletClientController";
import ListClientController from "../../../../modules/client/useCase/listClient/LisClientController";
import ListClientByIdController from "../../../../modules/client/useCase/listClient/ListClientByIdController";
import UpdateClientController from "../../../../modules/client/useCase/updateClient/UpdateClientController";

const clientRoute = Router();

const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const listClientByIdController = new ListClientByIdController();
const updateClient = new UpdateClientController();
const deleteClient = new DeleteClienteController();

clientRoute.post("/", createClientController.handle);
clientRoute.get("", listClientController.handle);
clientRoute.get("/:id", listClientByIdController.handle);
clientRoute.patch("/update/:id", updateClient.handle);
clientRoute.delete("/delete/:id", deleteClient.handle);

export default clientRoute;
