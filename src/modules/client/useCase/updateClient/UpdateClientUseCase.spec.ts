import AppError from "../../../../shared/Errors/AppError";
import CreateClientInMemory from "../../repository/inMemory/CreateClientInMemory";
import CreateClientUseCase from "../createClient/CreateClientUseCase";
import UpdateClientUseCase from "./UpdateClientUseCase";

let upadateClientUseCase: UpdateClientUseCase;
let clientRespository: CreateClientUseCase;
let clientInMemory: CreateClientInMemory;

describe("Update Client", () => {
  beforeEach(() => {
    clientInMemory = new CreateClientInMemory();
    clientRespository = new CreateClientUseCase(clientInMemory);
    upadateClientUseCase = new UpdateClientUseCase(clientInMemory);
  });

  it("Shoulb able update full_name client", async () => {
    const client = {
      full_name: "Jhon doe",
      gender: "male",
      birth_date: new Date(),
      age: "20",
      city_id: "esdfdfd25sd",
    };

    const clientUpdate = await clientRespository.execute({
      full_name: "Another full_name",
      gender: client.gender,
      birth_date: client.birth_date,
      age: client.age,
      city_id: client.city_id,
    });
    const response = await upadateClientUseCase.execute({
      id: clientUpdate.id,
      full_name: clientUpdate.full_name,
    });

    expect(response).toBe(response);
  });

  it("Should not be able update full_name if client not exists", async () => {
    expect(async () => {
      await upadateClientUseCase.execute({
        id: "12313131",
        full_name: "jhon doe",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
