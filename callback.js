setTimeout(() => {
  console.log("callback")
  setTimeout(() => {
    console.log("callback 2")
    setTimeout(() => {
      console.log("callback 3")
    }, 1)
  }, 2)
}, 3)

console.log("outside")
function case1() {
  console.log("hello i am case 1")
}
