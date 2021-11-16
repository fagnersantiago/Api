// import { Connection, createConnection, getConnectionOptions } from "typeorm";

// export default async (): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();
//   return createConnection(
//     Object.assign(defaultOptions, {
//       database: "RegisterCityAndUser",
//     })
//   );
// };

import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "192.168.99.100";

  createConnection({
    ...options,
  });
});
