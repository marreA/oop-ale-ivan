
class TextCell {
  constructor(text){
    this.text = text.split("\n");
  }
  get minWidth() {
    return this.text.reduce((width, line) => {
      return Math.max(width, line.length);
    }, 0);
  }
  get minHeight() {
    return this.text.length;
  }
  repeat(string, times) {
    let result = "";
    for(let i = 0; i < times; i++){
      result += string;
    }
    return result;
  }
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
