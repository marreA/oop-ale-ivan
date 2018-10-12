const TextCell = require('../src/textcell');
const UnderlinedCell = require('../src/underlinedcell');



  dataTable  = (data) => {
    //console.log(data);
    var keys = Object.keys(data[0]);
    //console.log(keys);
    var categorias = keys.map(function(categoria) {
      return new UnderlinedCell(TextCell.LEFT, categoria);
    });

    var datos = data.map(function(fila) {
      return keys.map(function(i) {
        var nombre = fila[i];
        //console.log(i + " " + nombre);
        return new TextCell(i, TextCell.CENTER, nombre.toString());
      });
    });

    return categorias.concat(datos);
    //console.log("Categorias \n " + categorias);
    //console.log("Datos \n " + datos);
  };

  drawTable = (data) => {
    console.log(data.length);

    drawLine = (data, numlinea) => {
        console.log(data[numlinea]);
        return data[numlinea];
    }

    drawLine(data, 6);
  /*  var keys = Object.keys(data[0]);
    console.log(keys);
    var datos = data.map(function(fila) {
      return keys.map(function(i) {
        var nombre = fila[i];
        console.log(i + " " + nombre);
        return nombre;
        //return new TextCell(i, TextCell.CENTER, nombre.toString());
      });
    });*/
  };

  createTable = (data) => {

  };