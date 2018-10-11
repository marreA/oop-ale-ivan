const TextCell = require('./textcell.js');
class UnderlinedCell extends TextCell {
  constructor(inner) {
    if(!inner instanceof TextCell)
      throw new Error("Inner cell must be a cell");
    super(inner.type, inner.align, inner.text.toString());
    this.innerCell = inner;
  }
  get minHeight() {
    return this.innerCell.minHeight + 1;
  }
  get minWidth() {
    return this.innerCell.minWidth;
  }
  draw(width, height) {
    return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
  }
}

module.exports = UnderlinedCell;
