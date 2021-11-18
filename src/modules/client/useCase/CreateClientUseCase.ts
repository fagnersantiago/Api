import { inject, injectable } from "tsyringe";
import Client from "../infra/typeorm/entities/Client";
import IClientRepository from "../repository/IClientRepository";
import AppError from "../../../shared/Errors/AppError";

interface IRequest {
  id?: string;
  full_name: string;
  gender: string;
  birth_date: Date;
  age: string;
  city_id: string;
}

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}
  async execute({
    id,
    full_name,
    gender,
    birth_date,
    age,
    city_id,
  }: IRequest): Promise<Client> {
    const clientAlreadyExist = await this.clientRepository.findById(id);

    console.log(clientAlreadyExist);

    if (clientAlreadyExist) {
      throw new AppError("Client Already exists");
    }

    const client = await this.clientRepository.create({
      full_name,
      gender,
      birth_date,
      age,
      city_id,
    });

    return client;
  }
}

export default CreateClientUseCase;
