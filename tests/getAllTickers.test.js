require('jest-extended')
const CoinpaprikaAPI = require('../index')

describe('getAllTickers', () => {
    let client = null

    beforeEach(() => {
        client = new CoinpaprikaAPI()
    })
})