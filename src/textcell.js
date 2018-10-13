class TextCell {
  constructor(type, align, text){
    if(align != TextCell.LEFT && align != TextCell.CENTER
      && align != TextCell.RIGHT){
      throw new Error(TextCell.ALIGN_ERROR);
    }
    this.type = type;
    this.align = align;
    this.text = text.split("\n");
  }
  static get LEFT() {
    return -1;
  }
  static get CENTER() {
    return 0;
  }
  static get RIGHT() {
    return 1;
  }
  static get ALIGN_ERROR() {
    return "Align must be:\n -1: left \n 0: center \n 1: right";
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

module.exports = TextCell;
