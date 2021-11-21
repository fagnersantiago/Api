import { Request, Response } from "express";
import { container } from "tsyringe";
import ListClientByIdUseCase from "./ListClientByIdUseCase";

class ListClientByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listClientByUseCase = container.resolve(ListClientByIdUseCase);

    const client = await listClientByUseCase.execute(id as string);
    console.log(client);
    return response.status(200).json(client);
  }
}

export default ListClientByIdController;
