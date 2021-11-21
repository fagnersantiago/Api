import { Request, Response } from "express";
import { container } from "tsyringe";
import ListClient from "./ListClientUseCase";

class ListClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { full_name } = request.query;

    const listCityUseCase = container.resolve(ListClient);

    const client = await listCityUseCase.execute(full_name as string);
    return response.status(200).json(client);
  }
}

export default ListClientController;
