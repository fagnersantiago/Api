import ICreateClientDTO from "../dtos/ICreateDTO";
import Client from "../infra/typeorm/entities/Client";

interface IClientRepository {
  create(data: ICreateClientDTO): Promise<Client>;
  findByName(name: String): Promise<Client>;
  findById(id: string): Promise<Client>;
}

export default IClientRepository;
