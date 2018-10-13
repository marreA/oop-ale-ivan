const TextCell = require("../src/textcell");
const UnderlinedCell = require("../src/underlinedcell");

colWidths = (filas) => {
  //console.log("Heys" + filas[0].length);
  if(filas[0].length !== undefined) {
    return filas[0].map(function(_, i) {
      return filas.reduce(function(max, row) {
        return Math.max(max, row[i].minWidth);
      }, 0);
    });
  }
};

colHeights = (filas) => {
    if(filas[0].length != undefined) {
  return filas.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight);
    }, 0);
  });
}
};

  dataTable  = (data) => {
    //console.log(data);
    var keys = Object.keys(data[0]);
    var categorias = keys.map(function(categoria) {
      return keys.map(function(categoria) {
        return new UnderlinedCell(TextCell.CENTER, categoria.toString());
        });
    });
    //Magia para evitar error de arrays, conversiones
    categorias = categorias.splice(0, 1);

    var datos = data.map(function(fila) {
      return keys.map(function(i) {
        //console.log(i + " " + nombre);
        return new TextCell(i, TextCell.CENTER, fila[i].toString());
      });
    });
    //console.log("PEPE " + categorias.concat(datos).length);
    return categorias.concat(datos);
    //return datos;
    //console.log("Categorias \n " + categorias);
    //console.log("Datos \n " + datos);
  };

  drawTable = (filas) => {
    //console.log(filas.length);
    //console.log(filas);
    let width = colWidths(filas);
    let height = colHeights(filas);


    dibujarLinea = (datos, numeroLinea) => {
        return datos.map(function(fila) {
          return fila[numeroLinea];
        }).join(" ");
    };

    dibujarFilas = (fila, numlinea) => {
        var content = fila.map(function(elemento, numCol) {
            //console.log("Tam " + width + " " + height);
            return elemento.draw(width[numCol], height[numlinea]);
        });
        return content[0].map(function(_, nlinea) {
          return dibujarLinea(content, nlinea);
        }).join("\n");
        //console.log(pepe);
        //console.log("Linea nume " + numlinea + " \n " + data[numlinea]);
    }
    //drawLine(data, 0);
    return filas.map(dibujarFilas).join("\n");
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
