import { inject, injectable } from "tsyringe";
import ICreateClientDTO from "../../dtos/ICreateClientDTO";
import IClientRepository from "../../repository/IClientRepository";
import AppError from "../../../../shared/Errors/AppError";
import Client from "../../infra/typeorm/entities/Client";

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
  }: ICreateClientDTO): Promise<Client> {
    const clientAlreadyExist = await this.clientRepository.findByName(
      full_name
    );

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
