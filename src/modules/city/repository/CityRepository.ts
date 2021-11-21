import { getCustomRepository, getRepository, Repository } from "typeorm";
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
    const city = await this.repository
      .createQueryBuilder("city")
      .where("city.name = :name", { name })
      //.orWhere("city.state = :state", { state })
      .getOne();

    return city;
  }

  async listCityByState(state: string): Promise<City[]> {
    const listCyteByState = await this.repository.find({ state });

    return listCyteByState;
  }

  async listCityByName(name: string): Promise<City> {
    const listCityByName = await this.repository.findOne({ name });

    return listCityByName;
  }
}

export default CityRepository;
