import { Request, response, Response } from "express";
import { container } from "tsyringe";
import DeleteClientUseCase from "./DeleteClientUseCase";

class DeleteClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteController = container.resolve(DeleteClientUseCase);

    await deleteController.execute(id);

    return response.status(201).send({ message: "User deleted!" });
  }
}
export default DeleteClienteController;
