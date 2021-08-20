const expect = require("chai").expect;
const polybius = require("../src/polybius");
const polybiusModule = require("../src/polybius");

describe('polybius', () => {
  it('encodes i and j to 42', () => {
    actual = polybiusModule.polybius('hailstate');
    expect(actual).to.equal('321142133444114451');
  });
  it('decodes 42 to (i/j)', () => {
    actual = polybiusModule.polybius('321142133444114451', false);
    expect(actual).to.equal('hai/jlstate');
  });
  it('ignores the capital letters', () => {
    actual = polybiusModule.polybius('HailState');
    expect(actual).to.equal('321142133444114451');
  });
  it('maintains the spaces', () => {
    actual = polybiusModule.polybius('hail state');
    expect(actual).to.equal('32114213 3444114451')
  })
}) 