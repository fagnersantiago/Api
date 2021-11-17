import { getRepository, Repository } from "typeorm";
import Client from "../infra/typeorm/entities/Client";
import ICreateClientDTO from "../dtos/ICreateClientDTO";
import IClientRepository from "./IClientRepository";

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
  }: ICreateClientDTO): Promise<Client> {
    const client = this.repository.create({
      full_name,
      gender,
      birth_date,
      age,
      city_id,
    });

    await this.repository.save(client);

    return client;
  }

  async findById(id: string): Promise<Client> {
    return this.repository.findOne(id);
  }

  async findByName(name: string): Promise<Client> {
    const client = this.repository.findOne(name);
    return client;
  }
}

export default ClientRepository;
