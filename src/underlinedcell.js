const TextCell = require("./textcell.js");
/**
 * Underlined cell for the headers
 **/
class UnderlinedCell extends TextCell {
  /**
   * Creates a new cell
   * @param {String} text Text for the cell.
   **/
  constructor(text) {
    super(text);
  }
  
  /**
   * Returns the height of the cell
   * @return {number} height
   **/
  get minHeight() {
    let result = super.minHeight;
    return super.minHeight + 1;
  }
    
  /**
   * Draws a UnderlinedCell
   * @param {number} width Width of the cell.
   * @param {number} height Height of the cell.
   * @return {array} UnderlinedCell as an array.
   **/
  draw(width, height) {
    return super.draw(width, height - 1).concat([super.repeat("-", width)]);
  }
}

module.exports = UnderlinedCell;
