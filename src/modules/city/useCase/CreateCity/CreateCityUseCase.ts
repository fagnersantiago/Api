import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import City from "../../infra/typeorm/entities/City";
import ICityRepository from "../../repository/ICityRepository";
import AppError from "../../../../shared/Errors/AppError";
import ICreateCityDTO from "../../dtos/ICreateCityDtos";

@injectable()
class CreateCityUseCase {
  constructor(
    @inject("CityRepository")
    private cityRepository: ICityRepository
  ) {}

  async execute({ name, state }: ICreateCityDTO): Promise<City> {
    const cityAlreadyExist = await this.cityRepository.findCityByName(name);

    if (cityAlreadyExist) {
      throw new AppError("City already exists!");
    }

    const city = await this.cityRepository.create({
      name,
      state,
    });

    return city;
  }
}

export default CreateCityUseCase;
