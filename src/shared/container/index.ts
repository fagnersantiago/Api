import "reflect-metadata";
import { container } from "tsyringe";
import ICityRepository from "../../modules/city/repository/ICityRepository";
import CityRepository from "../../modules/city/repository/CityRepository";
import IClientRepository from "../../modules/client/repository/IClientRepository";
import ClientRepository from "../../modules/client/repository/ClientRepository";

container.registerSingleton<ICityRepository>("CityRepository", CityRepository);
container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
);
