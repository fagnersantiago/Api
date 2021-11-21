import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/Errors/AppError";
import IClientRepository from "../../repository/IClientRepository";

@injectable()
class DeleteClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute(id: string): Promise<void> {
    const client = await this.clientRepository.findById(id);
    if (!client) {
      throw new AppError("Id not found.");
    }
    await this.clientRepository.delete(id);
  }
}

export default DeleteClientUseCase;
