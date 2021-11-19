import { Request, Response } from "express";
import { container } from "tsyringe";
import ListCityUseCase from "./ListCityUseCase";

class ListCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const listCityUseCase = container.resolve(ListCityUseCase);
    const listCityByName = await listCityUseCase.execute(name as string);
    return response.json(listCityByName);
  }
}

export default ListCityController;
