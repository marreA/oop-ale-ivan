const TextCell = require('../src/textcell');
const assert = require('assert');

describe('Chapter 6 - The Secret Life of Objects', () => {
  let text = 'Hello, World!';
  let textcell = new TextCell('plain', TextCell.LEFT, text);
  describe('TextCell', () => {
    it('Expected that TextCell exists', () => {
      assert.notEqual(textcell, null);
    });
    it('Text returns "Hello, World!"', () => {
      assert.equal(textcell.text, "Hello, World!");
    });
    it('Align returns left', () => {
      assert.equal(textcell.align, -1);
    });
    it('Align returns center', () => {
      textcell.align = TextCell.CENTER;
      assert.equal(textcell.align, 0);
    });
    it('Align returns right', () => {
      textcell.align = TextCell.RIGHT;
      assert.equal(textcell.align, 1);
    });
    it('Type returns plain', () => {
      assert.equal(textcell.type, 'plain');
    });
    it('repeat returns Hello, World! 3 times', () => {
      let result = textcell.repeat('Hello, World! ', 3);
      let expected = 'Hello, World! Hello, World! Hello, World! ';
      assert.equal(result, expected);
    });
    it('minWidth returns "Hello, World!".length', () => {
      assert.equal(textcell.minWidth, text.length);
    });
    it('minHeight returns 1', () => {
      assert.equal(textcell.minHeight, 1);
    });
    it('minHeight returns 1 with "Hello, World!\nHello, World!"', () => {
      let new_text = "Hello, World!,\nHello, World!";
      textcell.text = new_text;
      assert.equal(textcell.minHeight, new_text.length);
    });
    it('Draw returns and Hello, World!', () => {
      textcell.text = text;
      let result = text.split('');
      assert.deepEqual(textcell.draw(1, text.length), result);
    });
  });
});
