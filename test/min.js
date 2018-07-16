const should = require('should')
const min = require('../lib/min')

describe('#min', () => {
  // 測試有沒有取得正確的最小值
  it('測試有沒有取得正確的最小值', done => {
    const minimum = min([1, 10, 100, 1000])
    minimum.should.equal(1)
    done()
  })

  // 測試有沒有回傳 undefined
  it('測試有沒有回傳 undefined', done => {
    const minimum = min([])
    ;(minimum === undefined).should.be.true
    done()
  })
})
