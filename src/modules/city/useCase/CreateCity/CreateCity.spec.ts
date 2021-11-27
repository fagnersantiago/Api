import CreateCityUseCase from "./CreateCityUseCase";
import AppErrors from "../../../../shared/Errors/AppError";
import CreateCityRepositoryInMenory from "../../repository/inMemory/CreateCityRepositoryInMemory";

let createCity: CreateCityUseCase;
let createCityRepositoryInMemory: CreateCityRepositoryInMenory;
describe("Create City", () => {
  beforeEach(() => {
    createCityRepositoryInMemory = new CreateCityRepositoryInMenory();
    createCity = new CreateCityUseCase(createCityRepositoryInMemory);
  });

  it("should be to create a new city", async () => {
    const city = {
      name: "City's test",
      state: "State's test",
    };
    await createCity.execute({
      name: city.name,
      state: city.state,
    });
    const cityCreated = await createCityRepositoryInMemory.findCityByName(
      city.name
    );

    expect(cityCreated).toHaveProperty("id");
  });

  it("should not be to create a new city with same name", async () => {
    expect(async () => {
      const city = {
        name: "City's test",
        state: "State's test",
      };
      await createCity.execute({
        name: city.name,
        state: city.state,
      });
      await createCity.execute({
        name: city.name,
        state: city.state,
      });
    }).rejects.toBeInstanceOf(AppErrors);
  });
});
