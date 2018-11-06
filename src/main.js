const TextCell = require("./textcell");
const UnderlinedCell = require("./underlinedcell");
const DataTable = require("./Tabla.js");
const fs = require("fs");
let index = 3;
if(index === process.argv.length) {
  const input = require(process.argv[index -1]);
  var table = dataTable(input);
  console.log(drawTable(table));
} else {
    throw Error("A file must be specified!");
}
