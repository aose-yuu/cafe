import { defineBuildConfig } from "unbuild";

const alias = require("./alias.config.cjs").alias;

export default defineBuildConfig({
  alias,
  failOnWarn: false,
});
