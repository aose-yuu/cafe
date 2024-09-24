#!/usr/bin/env node
import { defineCommand, runMain } from "citty";
import { orderCommand } from "./commands/order";

const main = defineCommand({
  meta: {
    name: "cafe",
    description: "A simple CLI for ordering menu",
  },
  subCommands: {
    order: orderCommand,
  },
});

runMain(main);
