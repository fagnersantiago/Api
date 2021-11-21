import ICreateCityDTO from "../../city/dtos/ICreateCityDtos";
import City from "../infra/typeorm/entities/City";

interface ICityRepository {
  create(data: ICreateCityDTO): Promise<City>;
  findCityByName(name: string): Promise<City>;
  listCityByState(state: string): Promise<City[]>;
  listCityByName(name: string): Promise<City>;
}

export default ICityRepository;
