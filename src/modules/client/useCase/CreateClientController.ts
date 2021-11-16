import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateClientUseCase from "./CreateClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { full_name, gender, birth_date, age, city_id } = request.body;

    const createClienteUseCase = container.resolve(CreateClientUseCase);

    const client = await createClienteUseCase.execute({
      full_name,
      gender,
      birth_date,
      age,
      city_id,
    });

    return response.status(201).json(client);
  }
}

export default CreateClientController;
