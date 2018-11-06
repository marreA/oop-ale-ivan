const TextCell = require("./textcell.js");
/**
 * StretchCell class
 * 
 **/
class StretchCell extends TextCell {
  /**
   * Constructor which builds a new StretchCell
   * @param {String} text Text of the cell.
   * @param {number} width Width in columns for the cell.
   * @param {number} height Height in rows for the cell.
   **/
  constructor(text, width, height) {
    if(text instanceof Object) {
      super(text.text);
    } else {
      super(text);
    }
    this.width = width;
    this.height = height;
  }
  /**
   * Returns the width of the cell
   * @return {number} Width
   **/
  get minWidth() {
    return Math.max(this.width, super.minWidth);
  }
  /**
   * Returns the height of the cell
   * @return {number} height
   **/
  get minHeight() {
    return Math.max(this.height, super.minHeight);
  }
  /**
   * Draws a StretchCell
   * @param {number} width Width of the cell.
   * @param {number} height Height of the cell.
   * @return {array} StrectchCell as an array.
   **/
  draw(width, height) {
    return super.draw(Math.max(this.width, width), Math.max(this.height, height));
  }
}
const { addMapClass, findClass } = require("./registry-class");
addMapClass("StretchCell", StretchCell);
module.exports = StretchCell;
