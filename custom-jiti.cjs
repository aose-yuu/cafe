#!/usr/bin/env node
const alias = require("./alias.config.cjs").alias;
const [filePath, ...args] = process.argv.slice(2);
process.argv = [process.argv[0], filePath, ...args];

const jiti = require("jiti")(__filename, {
  esmRequire: true,
  alias,
});

jiti(filePath);
