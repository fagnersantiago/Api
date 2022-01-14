import ClientRepository from "../../repository/ClientRepository";
import CreateClientInMemory from "../../repository/inMemory/CreateClientInMemory";
import CreateClientUseCase from "../createClient/CreateClientUseCase";
import ListClientByIdUseCase from "./ListClientByIdUseCase";

let listClientByIdUseCase: ListClientByIdUseCase;
let clientRespository: CreateClientUseCase;
let clientInMemory: CreateClientInMemory;

describe("List Client by Id", () => {
  beforeEach(() => {
    clientInMemory = new CreateClientInMemory();
    clientRespository = new CreateClientUseCase(clientInMemory);
    listClientByIdUseCase = new ListClientByIdUseCase(clientInMemory);
  });

  it("Should be able list client by id", async () => {
    const client = {
      full_name: "Jhon doe",
      gender: "male",
      birth_date: new Date(),
      age: "20",
      city_id: "esdfdfd25sd",
    };

    const clientList = await clientRespository.execute({
      full_name: client.full_name,
      gender: client.gender,
      birth_date: client.birth_date,
      age: client.age,
      city_id: client.city_id,
    });

    const responseListClient = await listClientByIdUseCase.execute(
      clientList.id
    );

    expect(responseListClient).toHaveProperty("id");
    expect(responseListClient).toBe(clientList);
  });
});
