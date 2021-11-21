import { Request, Response } from "express";
import { container } from "tsyringe";
import UpdateClientUseCase from "./UpdateClientUseCase";

class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { full_name } = request.body;

    const updateClientController = container.resolve(UpdateClientUseCase);

    const updateClient = await updateClientController.execute({
      id,
      full_name,
    });
    console.log(updateClient);
    return response.status(201).json(updateClient);
  }
}

export default UpdateClientController;
