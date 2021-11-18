import { Request, Response } from "express";
import { container } from "tsyringe";
import ListCityUseCase from "./ListCityUseCase";

class ListCityController {
  handle(request: Request, response: Response): Response {
    const allCity = container.resolve(ListCityUseCase);
    allCity.execute();

    return response.status(200).json(allCity);
  }
}

export default ListCityController;
