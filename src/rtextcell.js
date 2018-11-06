const TextCell = require("./textcell.js");
/**
 * 
 * RTextCell class which inherit from TextCell class and implements a cell with rich text format.
 * 
 **/
class RTextCell extends TextCell {
  /**
   * Constructor to build a new RTextCell
   * @param {String} text Cell's text.
   **/
  constructor(text) {
    super(text);
  }
  /**
   * Draw method
   * @param {number} width Desired width for the cell.
   * @param {number} height Height (in rows) for the cell.
   * @return {array} RTextCell
   **/
  draw(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(super.repeat(" ", width - line.length) + line);
    }
    return result;
  }
}
const {addMapClass, findClass} = require("./registry-class");
addMapClass("Number", RTextCell);
addMapClass("RTextCell", RTextCell);
module.exports = RTextCell;
