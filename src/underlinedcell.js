const TextCell = require("./textcell.js");
class UnderlinedCell extends TextCell {
  constructor(text) {
    super(text);
  }

  get minHeight() {
    let result = super.minHeight;
    return super.minHeight + 1;
  }
  draw(width, height) {
    return super.draw(width, height - 1).concat([super.repeat("-", width)]);
  }
}

module.exports = UnderlinedCell;
