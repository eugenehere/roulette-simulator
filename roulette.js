const { isEmpty } = require('./helper')

const COLOR = { red: 'red', black: 'black' }
const reds = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
const blacks = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]

function getColor(result) {
  return reds.includes(result) ? COLOR.red
    : blacks.includes(result) ? COLOR.black : null
}

function spin() {
  // console.log('Spinning...')
  // for (let i = 0; i < 10000; i++) {} // delay
  return Math.floor(Math.random() * 37)
}

function bet(result, bet) {
  if (bet.money === 0) return bet.money

  if (!isEmpty(bet.number)) {
    console.log(`Betting on number (${bet.number}).`)
    return bet.number === result ? bet.money * 36 : 0
  }

  if (!isEmpty(bet.color)) {
    console.log(`Betting on color (${bet.color}).`)
    return bet.color === getColor(result) ? bet.money * 2 : 0
  }

  if (!isEmpty(bet.half)) {
    console.log(`Betting on half (${bet.half}).`)
    if (bet.half === 1) {
      return result >= 1 && result <= 18 ? bet.money * 2 : 0
    }
    if (bet.half === 2) {
      return result >= 19 && result <= 36 ? bet.money * 2 : 0
    }
    throw new Error('Bad bet: invalid condition - half')
  }

  if (!isEmpty(bet.third)) {
    console.log(`Betting on third (${bet.third}).`)
    if (bet.third === 1) {
      return result >= 1 && result <= 12 ? bet.money * 2 : 0
    }
    if (bet.third === 2) {
      return result >= 13 && result <= 24 ? bet.money * 2 : 0
    }
    if (bet.third === 3) {
      return result >= 25 && result <= 36 ? bet.money * 2 : 0
    }
    throw new Error('Bad bet: invalid condition - third')
  }

  if (!isEmpty(bet.thirdVert)) {
    console.log(`Betting on third vertical (${bet.thirdVert}).`)
    return bet.thirdVert === (result - 1) % 3 + 1 ? bet.money * 3 : 0
  }

  if (!isEmpty(bet.odd)) {
    console.log(`Betting on odd (${bet.odd}).`)
    const isOdd = Boolean(result % 2)
    return bet.odd === isOdd ? bet.money * 2 : 0
  }

  throw new Error('Bad bet: no condition provided')
}

module.exports = {
  bet,
  spin,
  getColor,
  COLOR,
}
