const { Wallet } = require('./wallet')
const strategy1 = require('./strategies/strategy1')
const statistics = require('./strategies/statistics')

function main() {
  const myWallet = new Wallet(1000)

  strategy1(myWallet)
  statistics()
}

main()
