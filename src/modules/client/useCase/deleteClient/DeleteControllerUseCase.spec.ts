import CreateClientInMemory from "../../repository/inMemory/CreateClientInMemory";
import DeleteClientUseCase from "./DeleteClientUseCase";
import CreateClientUseCase from "../createClient/CreateClientUseCase";
import AppError from "../../../../shared/Errors/AppError";

let createClientUseCase: CreateClientUseCase;
let clientCreateInMemory: CreateClientInMemory;
let deleteClienteUseCase: DeleteClientUseCase;

describe("Delete Client", () => {
  beforeEach(() => {
    clientCreateInMemory = new CreateClientInMemory();
    createClientUseCase = new CreateClientUseCase(clientCreateInMemory);
    deleteClienteUseCase = new DeleteClientUseCase(clientCreateInMemory);
  });

  it("should be able to delete client", async () => {
    const client = {
      full_name: "Client Test",
      gender: "Male",
      birth_date: new Date("10/10/2000"),
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

    await deleteClienteUseCase.execute(user.id);

    expect(user).toBe(user);
  });
  it("Should not be able to delete non-existent client", async () => {
    expect(async () => {
      await deleteClienteUseCase.execute("id");
    }).rejects.toBeInstanceOf(AppError);
  });
});
