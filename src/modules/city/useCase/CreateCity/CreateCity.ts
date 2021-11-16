import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCityUseCase from "./CreateCityUseCase";

class createCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, state } = request.body;

    const createCityUsecase = container.resolve(CreateCityUseCase);

    const city = await createCityUsecase.execute({
      name,
      state,
    });

    return response.status(201).json(city);
  }
}

export default createCityController;
