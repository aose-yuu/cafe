import { defineCommand, runMain as _runMain } from "citty";
import { readPackageJSON } from "pkg-types";

import { orderCommand } from "@/commands/order";

async function createMainCommand() {
  const packageJSON = await readPackageJSON();

  return defineCommand({
    meta: {
      name: packageJSON.name,
      version: packageJSON.version,
      description: packageJSON.description,
    },
    subCommands: {
      order: orderCommand,
    },
  });
}

export const runMain = async () => {
  const mainCommand = await createMainCommand();
  return _runMain(mainCommand);
};
