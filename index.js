require('dotenv').config()
const tokenList = require('./tokenList/quickswap-default.tokenlist.json')
const apiKey = process.env.POLYGONSCAN_API_KEY
const symbolArg = require('minimist')(process.argv.slice(2))

const symbol = symbolArg._[0].toUpperCase()

getTokenBySymbol(symbol, tokenList)

function getTokenBySymbol(symbol, tokenList) {
  let requestedTokens = []
  tokenList.tokens.forEach((token) => {
    if (token.symbol === symbol) {
      requestedTokens.push(token)
    }
    return
  })
  requestedTokens.forEach((token) => {
    fetch(
      `https://api.polygonscan.com/api?` +
        `module=stats` +
        `&action=tokensupply` +
        `&contractaddress=${token.address}` +
        `&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.result != 0)
          console.log(`${symbol} has total supply of: ${data.result}`)
      })
  })
}
