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
  }: ICreateClientDTO): Promise<Client> {
    const client = this.repository.create({
      full_name,
      gender,
      birth_date,
      age,
      city_id,
      id,
    });

    await this.repository.save(client);

    return client;
  }

  async findById(id: string): Promise<Client> {
    const clientId = await this.repository.findOne({ id });

    return clientId;
  }

  async findByName(full_name: string): Promise<Client> {
    const client = await this.repository.findOne({ full_name });

    return client;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
  async update(id: string, full_name: string): Promise<Client> {
    const client = this.repository.create({
      id,
      full_name,
    });

    await this.repository.save(client);

    return client;
  }
}

export default ClientRepository;
