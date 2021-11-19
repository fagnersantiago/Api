import { getRepository, Repository } from "typeorm";
import ICreateClientDTO from "../dtos/ICreateClientDTO";
import IClientRepository from "./IClientRepository";
import Client from "../infra/typeorm/entities/Client";

class ClientRepository implements IClientRepository {
  private repository: Repository<Client>;
  constructor() {
    this.repository = getRepository(Client);
  }

  async create({
    full_name,
    gender,
    birth_date,
    age,
    city_id,
    id,
  }: ICreateClientDTO): Promise<void> {
    const client = this.repository.create({
      full_name,
      gender,
      birth_date,
      age,
      city_id,
      id,
    });

    await this.repository.save(client);
  }

  async findById(id: string): Promise<Client> {
    const clientId = await this.repository.findOne(id);

    return clientId;
  }

  async findByName(full_name: string): Promise<Client> {
    const client = await this.repository.findOne(full_name);
    return client;
  }
}

export default ClientRepository;
