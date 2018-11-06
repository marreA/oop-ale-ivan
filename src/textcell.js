
/**
 * Plain text cell
 **/
class TextCell {
  /**
   * Creates a new cell
   * @param {String} text Text for the cell.
   **/
  constructor(text){
    let txt = String(text);
    this.text = txt.split("\n");
  }
  
  /**
   * Returns the width of the cell
   * @return {number} Width
   **/
  get minWidth() {
    return this.text.reduce((width, line) => {
      return Math.max(width, line.length);
    }, 0);
  }
  
  /**
   * Returns the height of the cell
   * @return {number} height
   **/
  get minHeight() {
    return this.text.length;
  }
  
  /**
   * Repeats the string
   * @param {String} string String to repeat
   * @param {number} times Times to repeat
   **/
  repeat(string, times) {
    let result = "";
    for(let i = 0; i < times; i++){
      result += string;
    }
    return result;
  }
  
  /**
   * Draws a TextCell
   * @param {number} width Width of the cell.
   * @param {number} height Height of the cell.
   * @return {array} TextCell as an array.
   **/
  draw(width, height) {
    let result = [];
    for(let i = 0; i < height; i++){
      let line = this.text[i] || " ";
      result.push(line + this.repeat(" ", width - line.length));
    }
    return result;
  }
}
const { addMapClass, findClass} = require("./registry-class");
addMapClass("String", TextCell);
addMapClass("TextCell", TextCell);
module.exports = TextCell;
