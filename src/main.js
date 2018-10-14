const TextCell = require("../src/textcell");
const UnderlinedCell = require("../src/underlinedcell");
const DataTable = require("../src/tabla.js");
//let textcell = new TextCell('plain', TextCell.LEFT, "HOOLA mundo");
//const input = require("../inputs/input2.json");
const fs = require("fs");
let index = 3;

/*lectorFichero = (nombreFichero) => {
  return fs.readFileSync(nombreFichero, "utf8");
};*/

if(index === process.argv.length) {
  const input = require(process.argv[index -1]);

  //console.log(process.argv[index -1]); //var table = dataTable(input);
  console.log("PEPE");
  console.log(input);
  console.log("PACO");
  var table = dataTable(input);
  //console.log(table.length);

  console.log(drawTable(table));
} else {
    throw Error("A file must be specified!");
}


//HAY QUE COMPROBAR RETORNOS DE CARRO TB
