import { Calculator } from "./Calculator.js"
console.log("this is sript")
console.log(Calculator)
let primaryElement = document.querySelector("[data-primary-operand]")
let secondaryElement = document.querySelector("[data-secondary-operand]")
let oprationElement = document.querySelector("[data-operation]")
console.log(primaryElement, secondaryElement, oprationElement)
const allButtons = [...document.querySelectorAll("button")]

allButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    let value = e.target.innerHTML
    let type = Object.keys(e.target.dataset)[0]
    console.log(typeof e.target.dataset)
    console.log(value, type)
    const calcObject = new Calculator(value.toString(), type)
    console.log(calcObject)
    switch (calcObject.type) {
      case "number":
        {
          console.log("its a number")
          primaryElement.innerHTML = primaryElement.innerHTML + calcObject.value
          primaryElement.innerHTML = addCommas(
            removeCommas(primaryElement.innerHTML)
          )
        }
        break
      case "operation":
        {
          secondaryElement.innerHTML = primaryElement.innerHTML
          oprationElement.innerHTML = calcObject.value
          primaryElement.innerHTML = ""
        }
        break
      case "delete":
        {
          primaryElement.innerHTML = primaryElement.innerHTML.slice(
            0,
            primaryElement.innerHTML.length - 1
          )
        }
        break
      case "allClear":
        {
          allClear()
        }
        break
      case "equals":
        {
          let output = Calculator.calculate(
            parseFloat(primaryElement.innerHTML),
            parseFloat(secondaryElement.innerHTML),
            oprationElement.innerHTML
          )
          allClear()
          primaryElement.innerHTML = output
        }
        break

      default:
        break
    }
  })
})

function allClear() {
  // function that clears all values
  console.log("allClear")
  primaryElement.innerHTML = ""
  secondaryElement.innerHTML = ""
  oprationElement.innerHTML = ""
}

function addCommas(str) {
  console.log("beforeProcessing" + str)

  console.log("string length" + str.length)
  str = [...str]
  if (str.length > 3) {
    for (let i = str.length; i > 2; ) {
      i = i - 3
      if (i > 0) str.splice(i, 0, ",")
    }
  }
  let newArr = str.reduce((a, b) => {
    return a.toString() + b.toString()
  })
  console.log(newArr)
  return newArr
}

function removeCommas(str = "2,38879,67,") {
  console.log("commas removed")
  if (str[0] == "0") str = str.slice(1)
  str = str.replaceAll(",", "")
  console.log(str)
  return str
}

removeCommas()
