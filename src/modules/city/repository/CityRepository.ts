import { getRepository, Repository } from "typeorm";
import City from "../infra/typeorm/entities/City";
import ICreateCityDTO from "../dtos/ICreateCityDtos";
import ICityRepository from "./ICityRepository";

class CityRepository implements ICityRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository = getRepository(City);
  }

  async create({ name, state }: ICreateCityDTO): Promise<City> {
    const city = this.repository.create({
      name,
      state,
    });
    await this.repository.save(city);

    return city;
  }

  async findCityByName(name: string): Promise<City> {
    const city = await this.repository.findOne({
      name,
    });

    return city;
  }

  async findCityByState(name: string): Promise<City[]> {
    const cityByState = await this.repository.find({ name });

    return cityByState;
  }
}

export default CityRepository;
