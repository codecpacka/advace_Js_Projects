import { calc, isValidEquation } from "./stringEquationCalculator.js"

console.log("math solver ")

//prevent default submission
const form = document.querySelector("#equation-form")
const equationElement = document.querySelector("#equation")
const result = document.querySelector("#results")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const equation = equationElement.value
  console.log(equation)
  if (isValidEquation(equation)) {
    console.log("valid string")
    // console.log(bindNumbers(equationArr))
    const equationArr = [...equation]

    const finalAns = calc(equationArr) //note:  main call
    console.log(finalAns)
    result.innerHTML = finalAns
  } else {
    alert("not a valid String")
  }
})

let arr = ["2", "+", "(", "3", "+", "2", ")", "*"]
console.log(arr)

// handelBrackets(arr)
// function handelBrackets(arr) {
//   if (!arr.includes("(")) return
//   let i = arr.indexOf("(")
//   let j = arr.indexOf(")")
//   let range = j - i
//   console.log(arr.slice(i + 1, j))
//   arr.splice(i, range + 1, 7)
//   return arr
// }
//get inner value

// function isValidEquation(equation) {
//   console.log([...equation])
//   const equationArr = [...equation]
//   isValid = equationArr.every((value) => {
//     return !isNumber(value) || isMathOperator(value)
//   })
//   if (isValid) return true
//   return false
// }

// function isNumber(value) {
//   return isNaN(parseInt(value))
// }

// function isMathOperator(value) {
//   const vailidOperators = [
//     { oprator: "*", value: 4 },
//     { oprator: "/", value: 3 },
//     { oprator: "+", value: 2 },
//     { oprator: "-", value: 1 },
//   ]
//   return vailidOperators.some((element) => {
//     if (element.oprator === value) {
//       return true
//     }
//   })
// }

// function calc(equationArr, sortedOprands) {
//   if (sortedOprands.length == 0) {
//     console.log("all operations done")
//     return equationArr
//   }

//   //note: older recursion code
//   indexOfOprand = equationArr.indexOf(sortedOprands[0])
//   console.log("index of oprand is " + indexOfOprand)

//   let OperationValue = doOperation(
//     equationArr[indexOfOprand - 1],
//     equationArr[indexOfOprand + 1],
//     sortedOprands.shift()
//   )
//   newEquation = Array.from(
//     modifyEquaionArray(equationArr, OperationValue, indexOfOprand)
//   )

//   console.log("new equation", newEquation, Array.isArray(newEquation))
//   console.log("new oprands left", sortedOprands, Array.isArray(newEquation))
//   return calc(newEquation, sortedOprands) //returning final value
// }

// function bindNumbers(eq) {
//   console.log("inside bind function")
//   const arr = []
//   temp = ""
//   eq.forEach((element, index) => {
//     if (index == eq.length - 1) {
//       arr.push(temp + element)
//     }
//     if (isMathOperator(element)) {
//       arr.push(temp)
//       arr.push(element)
//       temp = ""
//     } else {
//       temp += element
//     }
//   })
//   return arr
// }

// function doOperation(a, b, operator) {
//   switch (operator) {
//     case "*":
//       {
//         console.log("multiply operation done")

//         return a * b
//       }
//       break
//     case "/":
//       {
//         console.log("devide operation done")
//         return a / b
//       }
//       break
//     case "+":
//       {
//         console.log("addition done")
//         return parseFloat(a) + parseFloat(b)
//       }
//       break
//     case "-":
//       {
//         console.log("subraction done")
//         return a - b
//       }
//       break

//     default:
//       console.log("not a valid operator")
//       break
//   }
// }

// function modifyEquaionArray(arr, value, index) {
//   let a = arr
//   console.log(a)
//   a.splice(index - 1, 3, value)
//   // console.log("new passed arr" + a)
//   return a
// }
