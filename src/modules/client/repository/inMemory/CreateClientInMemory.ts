import Client from "../../infra/typeorm/entities/Client";
import IClientRepository from "../IClientRepository";

class CreateClientInMemory implements IClientRepository {
  private clientRepoitory: Client[] = [];

  async create({
    full_name,
    gender,
    birth_date,
    age,
    city_id,
  }): Promise<Client> {
    const client = new Client();

    Object.assign(client, {
      full_name,
      gender,
      birth_date,
      age,
      city_id,
    });

    this.clientRepoitory.push(client);

    return client;
  }

  async findByName(full_name: string): Promise<Client> {
    const clientName = this.clientRepoitory.find(
      (find) => find.full_name === full_name
    );

    return clientName;
  }

  async findById(id: string): Promise<Client> {
    const clientid = this.clientRepoitory.find((find) => find.id === id);
    return clientid;
  }

  async update(id: string, full_name: string): Promise<Client> {
    const clientUpdated = this.clientRepoitory.find((find) => find.id === id);
    Object.assign(clientUpdated, {
      id,
      full_name,
    });

    this.clientRepoitory.push(clientUpdated);

    return clientUpdated;
  }
  async delete(id: string): Promise<void> {
    this.clientRepoitory.find((find) => find.id === id);
  }
}

export default CreateClientInMemory;
