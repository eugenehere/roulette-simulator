const { bet, spin, getColor } = require('../roulette')

module.exports = function strategy1(wallet) {
  let sequenceCounter = 0
  let color
  let prevColor
  let betCounter = 0
  const amountCoefficient = [1, 1, 2, 4]
  const startAmount = 10

  for (let i = 0; i < 100; i++) {
    prevColor = color
    const result = spin()
    color = getColor(result)
    console.log(`Result: ${result} ${color}`)

    color === prevColor ? sequenceCounter++ : sequenceCounter = 1

    if (sequenceCounter <= 3) continue
    // if (!prevColor) continue
    if (betCounter >= amountCoefficient.length) {
      betCounter = amountCoefficient.length - 1
    }

    const winAmount = bet(result, {
      money: wallet.take(amountCoefficient[betCounter++] * startAmount),
      color: prevColor,
      number: null,
      half: null,
      third: null,
      thirdVert: null,
      odd: null,
    })
    wallet.put(winAmount)
    console.log(`Income: ${winAmount} $. Balance: ${wallet.getBalance()} $`)
  }

  console.log(`\nFinal balance: ${wallet.getBalance()} $ \n\n`)
}
