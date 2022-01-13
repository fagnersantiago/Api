import ClientRepository from "../../repository/ClientRepository";
import IClientRepository from "../../repository/IClientRepository";
import CreateClientInMemory from "../../repository/inMemory/CreateClientInMemory";
import DeleteClientUseCase from "./DeleteClientUseCase";
import CreateClientUseCase from "../createClient/CreateClientUseCase";
import AppError from "../../../../shared/Errors/AppError";

let createClientUseCase: CreateClientUseCase;
let clientCreateInMemory: CreateClientInMemory;

describe("Delete Client", () => {
  beforeEach(() => {
    clientCreateInMemory = new CreateClientInMemory();
    createClientUseCase = new CreateClientUseCase(clientCreateInMemory);
  });

  it("should be able to delete client", async () => {
    expect(async () => {
      const client = {
        full_name: "Client Test",
        gender: "Male",
        birth_date: new Date(),
        age: "33",
        city_id: "Test's client",
      };

      const user = await createClientUseCase.execute({
        full_name: client.full_name,
        gender: client.gender,
        birth_date: client.birth_date,
        age: client.age,
        city_id: client.city_id,
      });

      await clientCreateInMemory.delete(user.id);
      expect(user).toBe({});
    });
  });
});
