export type MenuNames = "Cafe latte" | "Hangover tea" | "Caramel milk";

export type MenuSize = "R" | "L";

export type Price = {
  [k in MenuSize]: number;
}

export type MenuItem = {
  name: MenuNames;
  price: Price;
};