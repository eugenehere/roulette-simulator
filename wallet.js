class Wallet {
  constructor(balance) {
    this._balance = balance
  }

  getBalance() {
    return this._balance
  }

  put(amount) {
    this._balance += amount
  }

  take(amount) {
    this._balance -= amount
    return amount
  }
}

module.exports = {
  Wallet,
}
