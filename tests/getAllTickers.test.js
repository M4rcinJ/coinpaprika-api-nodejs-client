const CoinpaprikaAPI = require('../index')

const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'

describe('getAllTickers', () => {
  let client = null

  beforeEach(() => {
    client = new CoinpaprikaAPI()
  })

  it('returns Promise if async/await not used', () => {
    const response = client.getAllTickers()
    expect(response instanceof Promise).toBe(true)
  })

  it('returns array of objects consistent with API documentation', async () => {
    const response = await client.getAllTickers()
    expect(Array.isArray(response)).toBeTruthy()
    const expectedProperties = ['id', 'name', 'rank', 'symbol', 'circulating_supply', 'total_supply', 'max_supply', 'beta_value', 'last_updated', 'quotes']

    response.forEach(item => {
      expect(isObject(item)).toBeTruthy()
      expectedProperties.forEach(property => {
        expect(item.hasOwnProperty(property)).toBeTruthy()
      })
    })
  })
})
