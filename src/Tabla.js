const TextCell = require('../src/textcell');
const UnderlinedCell = require('../src/underlinedcell');


colWidths = (filas) => {
  return filas[0].map(function(_, i) {
    return filas.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth);
    }, 0);
  });
};

colHeights = (filas) => {
  return filas.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight);
    }, 0);
  });
};

  dataTable  = (data) => {
    //console.log(data);
    var keys = Object.keys(data[0]);
    //console.log(keys);
    var categorias = keys.map(function(categoria) {
      return keys.map(function(categoria) {
        return new UnderlinedCell(TextCell.LEFT, categoria);
      });
    });
    //console.log(categorias);
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
    let width = colWidths(data);
    let height = colHeights(data);


    drawLine = (data, numlinea) => {
        var keys = Object.keys(data[numlinea][0]);
        var pepe = data[numlinea].map(function(elemento) {
            //console.log("Tam " + width + " " + height);
            return elemento.draw(width[numlinea], height[numlinea]);
        });
        console.log(pepe);
        //console.log(keys);
        //console.log("Linea nume " + numlinea + " \n " + data[numlinea]);
        return pepe;
    }
    drawLine(data, 0);
    drawLine(data, 1);
    drawLine(data, 2);
    drawLine(data, 3);
    drawLine(data, 4);
    drawLine(data, 5);
    drawLine(data, 6);
    drawLine(data, 7);
    drawLine(data, 8);
    drawLine(data, 9);
 };




    //for (i = 0; i < data.length; i++) {
    //    drawLine(data, i);
    //  }
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


  createTable = (data) => {

  };
