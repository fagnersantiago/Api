import ICreateCityDTO from "../../city/dtos/ICreateCityDtos";
import City from "../infra/typeorm/entities/City";

export interface ICityRepository {
  create(data: ICreateCityDTO): Promise<City>;
  findCityByName(name: string): Promise<City>;
  findCityByState(name: string): Promise<City[]>;
}

export default ICityRepository;
