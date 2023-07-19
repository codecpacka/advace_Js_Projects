const person = {
  name: "ram",
  friend: {
    name: "vi",
    friend: {
      name: "kile",
    },
  },
}
// let user = person
// while (user) {
//   console.log(user.name)
//   user = user.friend
// }

function printObject(user) {
  if (user == undefined) {
    console.log("recursion terminateds")
    return
  }
  console.log(user.name)
  printObject(user.friend)
}

// printObject(person)

console.log(undefined == null)

function sumRecursive(n, total = 0) {
  if (n < 0) {
    return total
  }
  total = n + sumRecursive(n - 2)
}

function printNumber(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i)
  }
}

// printNumber(3)

function printRec(n) {
  if (n <= 0) {
    console.log("loop terminated")
    return n
  }

  sum = n + printRec(n - 1)
  console.log(sum)
  return sum
}

printRec(5)
