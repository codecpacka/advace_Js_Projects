const person = {
  name: "ram",
  friends: ["p", "s"],
}
// imp: below is an example of impure function
// function addFriend(friendName) {
//   person.friends.push(friendName)
// }
// console.log(person)
// addFriend("dd")
// console.log(person)

console.log(person)
function addFriendPure(obj, friendName) {
  newObj = { ...obj }

  newObj.friends = [...newObj.friends, friendName]
  //   console.log(newObj)
  return newObj
}
console.log(addFriendPure(person, "nvgfh"))
console.log(person)
