import { inject, injectable } from "tsyringe";
import IClientRepository from "../../repository/IClientRepository";
import Client from "../../infra/typeorm/entities/Client";
import AppError from "../../../../shared/Errors/AppError";

@injectable()
class ListClientByIdUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}
  async execute(id: string): Promise<Client> {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new AppError("Client was not found!");
    }
    return client;
  }
}

export default ListClientByIdUseCase;
