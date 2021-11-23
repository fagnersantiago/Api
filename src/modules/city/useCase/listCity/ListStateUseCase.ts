import { inject, injectable } from "tsyringe";
import ICityRepository from "../../repository/ICityRepository";
import City from "../../infra/typeorm/entities/City";
import AppError from "../../../../shared/Errors/AppError";

@injectable()
class ListStateUseCase {
  constructor(
    @inject("CityRepository")
    private cityRepository: ICityRepository
  ) {}
  async execute(state: string): Promise<City> {
    const listState = await this.cityRepository.listCityByState(state);

    if (!listState) {
      throw new AppError("State was not found!");
    }
    return listState;
  }
}

export default ListStateUseCase;
