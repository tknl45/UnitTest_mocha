
//引用chai
const assert = require('chai').assert;
const expect = require('chai').expect;

// 加法
function add(x, y) {
    return x + y
}

// 減法
function sub(x, y) {
    return x - y
}
  
  

describe('測試 add', () => {
    it('1 + 2 = 3', () => {
      expect(add(1, 2)).to.equal(3);
    });
  
    it('3 + 4 = 7', () => {
      expect(add(3, 4)).to.equal(7);
    });
});
  
describe('測試 sub', () => {
    it('1 - 2 = -1', () => {
        expect(sub(1, 2)).to.equal(-1);
        
    });

    it('11 - 4 = 7', () => {
        expect(sub(11, 4)).to.equal(7);
    });
});

describe('測試 chai assert的錯誤宣告', function() {
    var foo = 'Hello';
    var bar = "World";
   
    it('測試 foo=bar的錯誤宣告', function() {
       assert(foo === 'bar', 'foo 不是 bar');
    });

    var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

   
     it('測試foo是文字型別', function() {
        assert.typeOf(foo, 'string'); // without optional message
     });

});