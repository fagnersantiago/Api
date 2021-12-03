import AppError from "../../../../shared/Errors/AppError";
import CreateClientInMemory from "../../repository/inMemory/CreateClientInMemory";
import CreateClientUseCase from "./CreateClientUseCase";

let clientUseCase: CreateClientUseCase;
let createClientInMemory: CreateClientInMemory;

describe("Create Client", () => {
  beforeEach(() => {
    createClientInMemory = new CreateClientInMemory();
    clientUseCase = new CreateClientUseCase(createClientInMemory);
  });

  it("should be create a new Client", async () => {
    const client = {
      full_name: "Client Test",
      gender: "Male",
      birth_date: new Date(),
      age: "33",
      city_id: "Test's client",
    };

    await clientUseCase.execute({
      full_name: client.full_name,
      gender: client.gender,
      birth_date: client.birth_date,
      age: client.age,
      city_id: client.city_id,
    });

    const clientCreated = await createClientInMemory.findByName(
      client.full_name
    );
    expect(clientCreated).toHaveProperty("id");
  });

  it("Should not be create a new client with same full_name", () => {
    expect(async () => {
      const client = {
        full_name: "Client Test",
        gender: "Male",
        birth_date: new Date(),
        age: "33",
        city_id: "Test's client",
      };

      await clientUseCase.execute({
        full_name: client.full_name,
        gender: client.gender,
        birth_date: client.birth_date,
        age: client.age,
        city_id: client.city_id,
      });
      await clientUseCase.execute({
        full_name: client.full_name,
        gender: client.gender,
        birth_date: client.birth_date,
        age: client.age,
        city_id: client.city_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
