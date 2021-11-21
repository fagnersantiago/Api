import { inject, injectable } from "tsyringe";
import ICityRepository from "../../repository/ICityRepository";
import City from "../../infra/typeorm/entities/City";

@injectable()
class ListCityUseCase {
  constructor(
    @inject("CityRepository")
    private cityRepository: ICityRepository
  ) {}

  async execute(name: string): Promise<City> {
    const city = await this.cityRepository.findCityByName(name);

    return city;
  }
}

export default ListCityUseCase;
