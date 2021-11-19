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
      //.orWhere("city.state = :state", { state})
      .getMany();

    return;
  }

  // async findCityByState(state: string): Promise<City[]> {
  //   const findState = await this.repository.find({ state });

  //   return findState;
  // }

  async list(): Promise<City[]> {
    const list = await this.repository.find();
    return list;
  }
}

export default CityRepository;
