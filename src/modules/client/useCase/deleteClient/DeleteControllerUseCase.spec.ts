import CreateClientInMemory from "../../repository/inMemory/CreateClientInMemory";
import DeleteClientUseCase from "./DeleteClientUseCase";

let deleteClientUseCase: DeleteClientUseCase;
let clientInMemory: CreateClientInMemory;

describe("Delete Client", () => {
  beforeEach(() => {
    clientInMemory = new CreateClientInMemory();
    deleteClientUseCase = new DeleteClientUseCase(clientInMemory);
  });

  it("should be delete client", async () => {
    const clientId = deleteClientUseCase.execute("id");

    expect(clientId).toBe(true);
  });
});
