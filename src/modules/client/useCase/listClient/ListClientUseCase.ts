import { inject, injectable } from "tsyringe";
import IClientRepository from "../../repository/IClientRepository";
import Client from "../../infra/typeorm/entities/Client";
import AppError from "../../../../shared/Errors/AppError";

@injectable()
class ListClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}
  async execute(full_name: string): Promise<Client> {
    const client = await this.clientRepository.findByName(full_name);

    if (!client) {
      throw new AppError("Client was not found!");
    }
    return client;
  }
}

export default ListClientUseCase;
