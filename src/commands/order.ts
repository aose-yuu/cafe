import { defineCommand } from "citty";
import consola from "consola";

import { menu, menuOptions, sizeOptions } from "@/constants";
import { MenuNames, MenuSize } from "@/types";

export const orderCommand = defineCommand({
  meta: {
    name: "order",
    description: "Order a menu item",
  },
  args: {
    target: {
      type: "string",
      description: "The target to order from",
    },
    size: {
      type: "string",
      description: "The size to order",
    },
  },
  async run(ctx) {
    const targetArg = ctx.args.target as MenuNames;
    const selectedTarget = menuOptions.includes(targetArg)
      ? targetArg
      : await consola.prompt("Which menu item to order?", {
          type: "select",
          options: menuOptions,
        });

    const sizeArg = ctx.args.size as MenuSize;
    const selectedSize = sizeOptions.includes(sizeArg)
      ? sizeArg
      : await consola.prompt("Which size to order?", {
          type: "select",
          options: sizeOptions,
        });

    const selectedMenuItem = menu.find((item) => {
      return item.name === selectedTarget;
    });

    if (!selectedMenuItem) {
      return consola.error("Menu item not found.");
    }

    const price = selectedMenuItem.price[selectedSize];
    consola.box(`${selectedTarget} (${selectedSize}): ${price} yen`);
  },
});
