import { defineCommand } from "citty";
import consola from "consola";

type MenuItem = {
  name: string;
  price: {
    R: number;
    L: number;
  };
};

const menu: MenuItem[] = [
  {
    name: "Cafe latte",
    price: {
      R: 220,
      L: 270,
    },
  },
  {
    name: "Hangover tea",
    price: {
      R: 240,
      L: 340,
    },
  },
  {
    name: "Caramel milk",
    price: {
      R: 280,
      L: 360,
    },
  },
];

const menuOptions = menu.map((item) => item.name);
const sizeOptions = ["R", "L"];

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
    const targetArg = ctx.args.target;
    const selectedTarget = menuOptions.includes(targetArg)
      ? targetArg
      : await consola.prompt("Which menu item to order?", {
          type: "select",
          options: menuOptions,
        });

    const sizeArg = ctx.args.size as "R" | "L";
    const selectedSize = sizeOptions.includes(sizeArg)
      ? sizeArg
      : ((await consola.prompt("Which size to order?", {
          type: "select",
          options: sizeOptions,
        })) as "R" | "L");

    const selectedMenuItem = menu.find((item) => item.name === selectedTarget);

    if (!selectedMenuItem) {
      return consola.error("Menu item not found.");
    }

    const price = selectedMenuItem.price[selectedSize];
    consola.box(`${selectedTarget} (${selectedSize}): ${price} yen`);
  },
});
