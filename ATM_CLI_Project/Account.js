const { log } = require("node:console")

const FileSystem = require("./FileSystem")
module.exports = class Account {
  constructor(name) {
    this.#name = name
  }
  #name
  #balance

  // function to get name
  get name() {
    return this.#name
  }
  // function to get balance
  get balance() {
    return this.#balance
  }
  get filepath() {
    return `${__dirname}\\accounts\\${this.#name}.txt`
  }
  static async find(accountName) {
    const account = new Account(accountName)
    try {
      await account.#load()
      return account
    } catch (e) {
      return
    }
  }
  static async createAccount(accountName) {
    const account = new Account(accountName)
    await FileSystem.write(account.filepath, 0)
    account.#balance = "0"
    return account
  }

  async #load() {
    this.#balance = await FileSystem.read(this.filepath)

    console.log("hello" + this.#balance)
  }
}
