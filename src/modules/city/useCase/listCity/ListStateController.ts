import { Request, Response } from "express";
import { container } from "tsyringe";
import ListStateUseCase from "./ListStateUseCase";

class ListStateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { state } = request.query;

    const listStateUseCase = container.resolve(ListStateUseCase);

    const listState = await listStateUseCase.execute(state as string);
    return response.status(200).json(listState);
  }
}

export default ListStateController;
