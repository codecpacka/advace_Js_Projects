// 1.//ask for account no
// 2.// if account doesn't exit as them if the  want to create account
// 3.// if accout exist ask what they want to do
// 4.// execute command
// //  a.// show balance
// //  b.// widraw money
// //  c.// add money

//account
const fs = require("fs")

const Account = require("./Account")
const CommandLine = require("./CommandLine")
const { log } = require("console")
async function main() {
  const accountName = await CommandLine.ask("enter your account Number")
  let account = await Account.find(accountName)
  if (account == null) {
    account = await promtCreateAccount(accountName)
  }
  if (account != null) {
    await promtTask(account)
  }
}
// Account.load() //for getting the file names of directory account
main()

async function promtCreateAccount(accountName) {
  response = await CommandLine.ask("would you like to create account (yes/no)")
  if (response == "yes") {
    account = await Account.createAccount(accountName)
    return account
  }
}
