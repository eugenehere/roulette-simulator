# Roulette game simulator

Node.js version: 20

```
node index.js
```

## Docs

#### Roulette

Provides methods to spin the roulette wheel and place bets.

- `spin()` returns a random number from 0 to 36
- `bet(spin_result, bet_object)` matches the bet with the result and returns the amount of money won
- `getColor(spin_result)` returns 'black' | 'red' | null

#### Wallet

Create a wallet and set the initial amount `new Wallet(1000)`

- `put(amount)` to put money into a wallet
- `take(amount)` to take money from a wallet
- `getBalance()` return the current amount

#### Strategies

The main idea of the simulator is to develop strategies and gather statistics to be able to see how probability theory works.
Leverage the above methods to place bets and spin the roulette wheel.

#### Demo

The `strategy1` involves waiting for a certain color to appear N times in a row and betting on the opposite color on the next spin (works in theory). Also involves betting limits on the roulette table e.g. 1k...10k, 10k...100k and so on

```
Result: 8 black
Result: 20 black
Result: 17 black
Result: 32 red
Result: 34 red
Result: 34 red
Result: 22 black
Result: 30 red
Result: 30 red
Result: 8 black
Result: 14 red
Result: 3 red
Result: 15 black
Result: 25 red
Result: 3 red
Result: 20 black
Result: 6 black
Result: 26 black
Result: 19 red
Result: 36 red
Result: 26 black
Result: 12 red
Result: 3 red
Result: 19 red
Result: 11 black
Result: 17 black
Result: 24 black
Result: 4 black
Betting on color (black).
Income: 20 $. Balance: 1010 $
Result: 13 black
Betting on color (black).
Income: 20 $. Balance: 1020 $
Result: 3 red
Result: 13 black
Result: 0 null
Result: 16 red
Result: 32 red
Result: 8 black
Result: 14 red
Result: 31 black
Result: 12 red
Result: 16 red
Result: 19 red
Result: 4 black
Result: 28 black
Result: 4 black
Result: 30 red
Result: 31 black
Result: 1 red
Result: 10 black
Result: 8 black
Result: 22 black
Result: 10 black
Betting on color (black).
Income: 40 $. Balance: 1040 $
Result: 29 black
Betting on color (black).
Income: 80 $. Balance: 1080 $
Result: 28 black
Betting on color (black).
Income: 80 $. Balance: 1120 $
Result: 4 black
Betting on color (black).
Income: 80 $. Balance: 1160 $
Result: 1 red
Result: 27 red
Result: 28 black
Result: 28 black
Result: 32 red
Result: 2 black
Result: 14 red
Result: 30 red
Result: 16 red
Result: 11 black
Result: 30 red
Result: 8 black
Result: 36 red
Result: 12 red
Result: 31 black
Result: 14 red
Result: 21 red
Result: 20 black
Result: 3 red
Result: 15 black
Result: 8 black
Result: 17 black
Result: 28 black
Betting on color (black).
Income: 80 $. Balance: 1200 $
Result: 2 black
Betting on color (black).
Income: 80 $. Balance: 1240 $
Result: 17 black
Betting on color (black).
Income: 80 $. Balance: 1280 $
Result: 15 black
Betting on color (black).
Income: 80 $. Balance: 1320 $
Result: 6 black
Betting on color (black).
Income: 80 $. Balance: 1360 $
Result: 12 red
Result: 15 black
Result: 15 black
Result: 12 red
Result: 21 red
Result: 23 red
Result: 2 black
Result: 33 black
Result: 19 red
Result: 12 red
Result: 24 black
Result: 35 black
Result: 2 black
Result: 17 black
Betting on color (black).
Income: 80 $. Balance: 1400 $
Result: 11 black
Betting on color (black).
Income: 80 $. Balance: 1440 $
Result: 26 black
Betting on color (black).
Income: 80 $. Balance: 1480 $
Result: 8 black
Betting on color (black).
Income: 80 $. Balance: 1520 $
Result: 17 black
Betting on color (black).
Income: 80 $. Balance: 1560 $
Result: 13 black
Betting on color (black).
Income: 80 $. Balance: 1600 $
Result: 26 black
Betting on color (black).
Income: 80 $. Balance: 1640 $

Final balance: 1640 $ 


{
  '1': 533,
  '2': 243,
  '3': 116,
  '4': 60,
  '5': 30,
  '6': 11,
  '7': 7,
  '8': 0,
  '9': 0,
  '10': 0,
  '11': 0,
  '12': 0,
  '13': 0,
  '14': 0,
  '15': 0,
  '16': 0
}
```
