const TextCell = require("./textcell.js");
class StretchCell extends TextCell {
  constructor(text, width, height) {
    super("stretchCell", TextCell.CENTER, text);
    this.width = width;
    this.height = height;
  }
  //Elige entre los dos width el mayor, super.minWidth min para mostrar texto
  get minWidth() {
    if(this.width > super.minWidth)
      return this.width;
    else
      return super.minWidth;
  }
  //Elige entre los dos height el mayor, super.minheigth min para mostrar texto
  get minHeight() {
    if(this.height > super.minHeight)
      return this.height;
    else
      return super.minHeight;
  }
  //Elige entre el de la clase y el especificado, el mayor
  draw(width, height) {
    //Elegimos siempre el mayor entre el actual y el que se desea pintar por par
    if(this.height > height && this.width > width)
      return super.draw(this.width, this.height);

    else if(this.height > height)
      return super.draw(width, this.height);
    else if(this.width > width)
      return super.draw(this.width, height);
    else
      return super.draw(width, height);
}
}

module.exports = StretchCell;
