import { getCustomRepository, getRepository, Repository } from "typeorm";
import ICreateCityDTO from "../../dtos/ICreateCityDtos";
import City from "../../infra/typeorm/entities/City";
import ICityRepository from "../ICityRepository";

class CreateCityRepositoryInMenory implements ICityRepository {
  private cityRepository: City[] = [];

  async create({ name, state }: ICreateCityDTO): Promise<City> {
    const city = new City();

    Object.assign(city, {
      name,
      state,
    });

    this.cityRepository.push(city);
    return city;
  }

  async listCityByState(state: string): Promise<City> {
    const listCityByState = this.cityRepository.find(
      (find) => find.state === state
    );
    return listCityByState;
  }

  async listCityByName(name: string): Promise<City> {
    const listCityByName = this.cityRepository.find(
      (city) => city.name === name
    );

    return listCityByName;
  }

  async findCityByName(name: string): Promise<City> {
    const city = this.cityRepository.find((find) => find.name === name);

    return city;
  }
}

export default CreateCityRepositoryInMenory;
