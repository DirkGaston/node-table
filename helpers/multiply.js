const fs = require("fs");
const colors = require("colors");

const createFile = async (base = 5, list = false, until = 10) => {
  try {
    let result = "";
    let output = "";

    for (let i = 1; i <= until; i++) {
      result += `${base} x ${i} = ${base * i}\n`;
      output += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (list) {
      console.log("======================".green);
      console.log("Table for:".green, colors.blue(base));
      console.log("======================".green);

      console.log(output);
    }

    fs.writeFileSync(`./output/table-${base}.txt`, result);

    return `table-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
