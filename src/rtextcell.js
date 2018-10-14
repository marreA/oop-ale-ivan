const TextCell = require("./textcell.js");

class RTextCell extends TextCell {
  constructor(text) {
    super("number", TextCell.RIGHT, text);
  }

  draw(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(super.repeat(" ", width - line.length) + line);
    }
    return result;
  }
}

module.exports = RTextCell;