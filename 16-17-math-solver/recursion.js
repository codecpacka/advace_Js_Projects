function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i)
  }
  console.log("hoorey")
}

// countDown(3)

function countDownRecurcive(n) {
  if (n <= 0) {
    console.log("hurrey")
    return
  }
  console.log(n)
  countDownRecurcive(n - 1)
}

// countDownRecurcive(3)

function sumRange(n) {
  total = 0 //values that u need to update u need to pass them
  for (let i = n; i > 0; i--) {
    total = total + i
  }
  console.log(total)
}

// sumRange(3)

function sumRangeRecurcive(n, total = 0) {
  if (n <= 0) {
    return total
  }
  return sumRangeRecurcive(n - 1, total + n)
}

const sum = sumRangeRecurcive(3, 0)
console.log(sum)
