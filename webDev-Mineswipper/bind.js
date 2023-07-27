arr = [4, 2, 9, 1, 8]
function multiply(element, value) {
  return element * value
}
let a = multiply.bind(null, 2)
console.log(a(4))

// arr.forEach((e) => {
//   multiply(e, 2)
// })
