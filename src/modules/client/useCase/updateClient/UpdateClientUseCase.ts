import { inject, injectable } from "tsyringe";
import IClientRepository from "../../repository/IClientRepository";
import ICreateClientDTO from "../../../client/dtos/ICreateClientDTO";
import Client from "../../infra/typeorm/entities/Client";
import AppError from "../../../../shared/Errors/AppError";

@injectable()
class UpdateClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}
  async execute({
    id,
    full_name,
  }: {
    id: string;
    full_name: string;
  }): Promise<Client | undefined> {
    const clientId = await this.clientRepository.findById(id);

    if (!clientId) {
      throw new AppError(" client or id not found!");
    }

    const client = await this.clientRepository.update(id, full_name);
    console.log(clientId);

    return client;
  }
}

export default UpdateClientUseCase;
