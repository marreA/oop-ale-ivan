const TextCell = require("../src/textcell");
const UnderlinedCell = require("../src/underlinedcell");
const RTextCell = require("../src/rtextcell");
const StretchCell = require("../src/stretchcell");

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
    var keys = Object.keys(data[0]);
    var categorias = keys.map(function(categoria) {
      return keys.map(function(categoria) {
        return new UnderlinedCell(TextCell.LEFT, categoria.toString());
        });
    });
    //Magia para evitar error de arrays, conversiones
    categorias = categorias.splice(0, 1);
    var datos = data.map(function(fila) {
      return keys.map(function(i) {
        var value = fila[i];
        if (typeof value == "number") {
          return new RTextCell(fila[i].toString());
        } else if (typeof value == "object") {
          console.log("AQUIIIIIIIIII!, CAMBIAR, reto2, se tiene que llamar con " +  value.type.toString());
          return new TextCell(i, TextCell.LEFT,  value.toString());
        } else {
          return new TextCell(i, TextCell.LEFT,  value.toString());
      }
      });
    });
    return categorias.concat(datos);
  };

  drawTable = (filas) => {
    let width = colWidths(filas);
    let height = colHeights(filas);
    dibujarLinea = (datos, numeroLinea) => {
        return datos.map(function(fila) {
          return fila[numeroLinea];
        }).join(" ");
    };

    dibujarFilas = (fila, numlinea) => {
        var content = fila.map(function(elemento, numCol) {
            return elemento.draw(width[numCol], height[numlinea]);
        });
        return content[0].map(function(_, nlinea) {
          return dibujarLinea(content, nlinea);
        }).join("\n");
    }
    return filas.map(dibujarFilas).join("\n");
 };
  createTable = (data) => {  };
