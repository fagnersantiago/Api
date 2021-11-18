import { inject, injectable } from "tsyringe";
import City from "../../infra/typeorm/entities/City";
import ICityRepository from "../../repository/ICityRepository";

@injectable()
class ListCityUseCase {
  constructor(
    @inject("CityRepository")
    private listCityRepository: ICityRepository
  ) {}
  async execute(): Promise<City[]> {
    const listCity = await this.listCityRepository.list();

    return listCity;
  }
}

export default ListCityUseCase;
