const { createFile } = require("./helpers/multiply");
const argv = require("./config/yargs");

require("colors");

console.clear();

// console.log(process.argv);

// console.log(argv);

// console.log("base: yargs", argv.base);

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// console.log(base);

// console.log(process.argv);

// const base = 1;

createFile(argv.b, argv.l, argv.u)
  .then((fileName) => console.log(fileName.rainbow, "created"))
  .catch((err) => console.log(err));
