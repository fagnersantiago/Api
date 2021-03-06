import { inject, injectable } from "tsyringe";
import ICityRepository from "../../repository/ICityRepository";
import City from "../../infra/typeorm/entities/City";
import AppError from "../../../../shared/Errors/AppError";

interface IRequest {
  name?: string | undefined;
  state?: string | undefined;
}
@injectable()
class ListCityUseCase {
  constructor(
    @inject("CityRepository")
    private cityRepository: ICityRepository
  ) {}
  async execute(name: string): Promise<City> {
    const city = await this.cityRepository.findCityByName(name);

    if (!city) {
      throw new AppError("City was not found!");
    }
    return city;
  }
}

export default ListCityUseCase;
