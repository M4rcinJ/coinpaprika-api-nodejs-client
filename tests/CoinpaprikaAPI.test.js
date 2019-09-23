const CoinpaprikaAPI = require('../index')

describe('CoinpaprikaAPI class', () => {
  let cient = null

  beforeEach(() => {
    client = new CoinpaprikaAPI()
  })

  it('is defined', () => {
    expect(client).toBeDefined()
  })

  it('has defined all endpoints consistent to API documentation', () => {
    expect(client.getGlobal).toBeDefined()
    expect(client.getCoins).toBeDefined()
    expect(client.getPeople).toBeDefined()
    expect(client.getTags).toBeDefined()
    expect(client.getAllTickers).toBeDefined()
    expect(client.getTicker).toBeDefined()
    expect(client.getExchanges).toBeDefined()
    expect(client.search).toBeDefined()
  })
})
