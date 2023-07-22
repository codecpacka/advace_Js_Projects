function createUser(email, password, language) {
  this.email = email
  this.password = password
  this.language = language
  //   this.printPassword = function () {
  //     console.log(this.password)
  //   }
}
createUser.prototype.printPassFromPrototype = function () {
  console.log(this.password)
}

const user = new createUser("ram@gmail.com", "23", "hindi")
console.log(user)
// user.printPassword()
user.printPassFromPrototype()

// class CreateUser {
//   constructor(email, password, language) {
//     this.email = email
//     this.password = password
//     this.language = language
//   }
//   printPassword() {
//     console.log(this.password)
//   }
// }

// const newUser = new CreateUser("ram@2", "35", "hindi")
// console.log(newUser)
// newUser.printPassword()
