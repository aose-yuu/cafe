import { MenuItem, MenuSize } from "@/types";

export const menu: MenuItem[] = [
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

export const menuOptions = menu.map((item) => item.name);
export const sizeOptions = ["R", "L"] as MenuSize[];
