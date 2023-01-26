const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "It's the base number for the multiplication table",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Logs the table in the console",
  })
  .option("u", {
    alias: "until",
    type: "number",
    default: 10,
    describe: "Determines the final number up until which the table runs",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number";
    }
    if (isNaN(argv.u)) {
      throw "Until must be a number";
    }
    return true;
  }).argv;

module.exports = argv;
