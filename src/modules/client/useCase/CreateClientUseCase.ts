import { inject, injectable } from "tsyringe";
import ICreateClientDTO from "../dtos/ICreateClientDTO";
import IClientRepository from "../repository/IClientRepository";
import AppError from "../../../shared/Errors/AppError";

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
  }: ICreateClientDTO): Promise<void> {
    const clientAlreadyExist = await this.clientRepository.findById(id);

    console.log(clientAlreadyExist);

    if (clientAlreadyExist) {
      throw new AppError("Client Already exists");
    }

    await this.clientRepository.create({
      full_name,
      gender,
      birth_date,
      age,
      city_id,
    });
  }
}

export default CreateClientUseCase;
