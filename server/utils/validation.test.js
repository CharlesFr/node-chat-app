const expect = require('expect');
const { isRealString } = require('./validation');

describe('Testing Validation function', () => {

  it('should correctly identify non-string values', () => {

    var name = '123';
    var returned = isRealString(name);
    expect(returned).toBe(true);
    expect(typeof returned).toBe('boolean');
  })

  it('should correctly identify valid string', () => {

    var name = 'Charles';
    var returned = isRealString(name);
    expect(returned).toBe(true);
    expect(typeof returned).toBe('boolean');
  })

  it('should correctly identify invalid string', () => {
    var name = '    ';
    var returned = isRealString(name);
    expect(returned).toBe(false);
    expect(typeof returned).toBe('boolean');
  })

})