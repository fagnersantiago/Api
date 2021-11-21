import ICreateClientDTO from "../dtos/ICreateClientDTO";
import Client from "../infra/typeorm/entities/Client";

export interface IClientRepository {
  create(data: ICreateClientDTO): Promise<Client>;
  findByName(full_name: string): Promise<Client | undefined>;
  findById(id: string): Promise<Client>;
  delete(id: string): Promise<void>;
  update(id: string, full_name: string): Promise<Client>;
}

export default IClientRepository;
