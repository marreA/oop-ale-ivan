const TextCell = require("./textcell.js");
class StretchCell extends TextCell {
  constructor(text, width, height) {
    console.log(text);
    if(text instanceof  Object)
      super(text.text);
    else
      super(text);
      
    this.width = width;
    this.height = height;
  }
  //Elige entre los dos width el mayor, super.minWidth min para mostrar texto
  get minWidth() {
    return Math.max(this.width, super.minWidth);
  }
  //Elige entre los dos height el mayor, super.minheigth min para mostrar texto
  get minHeight() {
    return Math.max(this.height, super.minHeight);
  }
  //Elige entre el de la clase y el especificado, el mayor
  draw(width, height) {
    //Elegimos siempre el mayor entre el actual y el que se desea pintar por par
    return super.draw(Math.max(this.width, width), Math.max(this.height, height));
  }
}
const { addMapClass, findClass } = require("./registry-class");
addMapClass("StretchCell", StretchCell);
module.exports = StretchCell;
