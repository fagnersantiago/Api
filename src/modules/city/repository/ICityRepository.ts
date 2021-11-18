import ICreateCityDTO from "../../city/dtos/ICreateCityDtos";
import City from "../infra/typeorm/entities/City";

export interface ICityRepository {
  create(data: ICreateCityDTO): Promise<City>;
  findCityByName(name: string): Promise<City>;
  // findState(state: string): Promise<City[]>;
  list(): Promise<City[]>;
}

export default ICityRepository;
