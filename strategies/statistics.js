const { spin, getColor } = require('../roulette')

module.exports = function statistics() {
  const stats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let counter = 0
  let color
  let prevColor

  for (let i = 0; i < 1000; i++) {
    prevColor = color
    color = getColor(spin())
    color === prevColor ? counter++ : counter = 1
    stats[counter - 1]++
  }

  const statistics = {}
  for (let i = 0; i < stats.length; i++) statistics[i + 1] = stats[i]
  console.log(statistics)
}
