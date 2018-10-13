const TextCell = require('../src/textcell');
const UnderlinedCell = require('../src/underlinedcell');
const DataTable = require('../src/Tabla.js');
//let textcell = new TextCell('plain', TextCell.LEFT, "HOOLA mundo");
const input = require('../inputs/input.json');
const fs = require('fs');
let index = 3;


lectorFichero = (nombreFichero) => {
  return fs.readFileSync(nombreFichero, 'utf8');
};


if(index == process.argv.length) {
  //console.log(process.argv[index -1]); //var table = dataTable(input);
  //console.log(lectorFichero(process.argv[index -1]));
  var table = dataTable(JSON.parse(lectorFichero(process.argv[index -1])));
  //console.log(table.length);

  console.log(drawTable(table));
} else {
    throw Error("A file must be specified!");
}


//HAY QUE COMPROBAR RETORNOS DE CARRO TB
