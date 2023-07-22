n = 3
sum = 0
for (let i = 0; i < n; i++) {
  //   console.log(i)
  sum = sum + i
}

console.log(sum)
function printNumber(n) {
  if (n < 1) {
    return
  }
  printNumber(n - 1)
  console.log(n)
  return
}

// printNumber(3)

function sumNumber(n, sum = 0) {
  if (n < 0) return sum
  sum = n + sum(n - 1)
  return sum
}

a = [3, 5, 3]
a.findLast()
