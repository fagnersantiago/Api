import ICreateClientDTO from "../dtos/ICreateClientDTO";
import Client from "../infra/typeorm/entities/Client";

export interface IClientRepository {
  create(data: ICreateClientDTO): Promise<void>;
  findByName(name: String): Promise<Client>;
  findById(id: string): Promise<Client>;
}

export default IClientRepository;
