const should = require('should')
const assert = require('assert');
describe('#test', () => {
  // 
  describe('#測試indexOf()', function() {
    it('測試回傳 -1 ', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });

  // Calling `done()` twice is an error
  it('測試2次 done', function(done) {
    
    setImmediate(done);
    setImmediate(done);
  });
  


})
