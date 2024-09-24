import { defineCommand, runMain as _runMain } from "citty";
import { readPackageJSON } from "pkg-types";

import { orderCommand } from "@/commands/order";

async function createMainCommand() {
  const packageJson = await readPackageJSON();

  return defineCommand({
    meta: {
      name: packageJson.name,
      version: packageJson.version,
      description: packageJson.description,
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
