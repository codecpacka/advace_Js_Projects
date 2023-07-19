export const OP_POWER = {
  "^": 5,
  "*": 4,
  "/": 3,
  "-": 2,
  "+": 1,
}

export function isNumber(value) {
  return isNaN(parseInt(value))
}

export function isMathOperator(value) {
  const vailidOperators = [
    { oprator: "(" },
    { oprator: ")" },
    { oprator: "^", value: 5 },
    { oprator: "*", value: 4 },
    { oprator: "/", value: 3 },
    { oprator: "+", value: 2 },
    { oprator: "-", value: 1 },
  ]
  return vailidOperators.some((element) => {
    if (element.oprator === value) {
      return true
    }
  })
}

export function calc(equationArr) {
  equationArr = handelBrackets(equationArr)
  console.log(equationArr, "handel bracket output")
  equationArr = bindNumbers(equationArr)
  const test = equationArr.filter(isMathOperator)
  const sortedOprands = test.sort((a, b) => {
    return OP_POWER[b] - OP_POWER[a]
  })
  if (sortedOprands.length == 0) {
    console.log("all operations done")
    return equationArr[0]
  }

  //note: older recursion code
  let indexOfOprand = equationArr.indexOf(sortedOprands[0])
  console.log("index of oprand is " + indexOfOprand)

  let OperationValue = doOperation(
    equationArr[indexOfOprand - 1],
    equationArr[indexOfOprand + 1],
    sortedOprands.shift()
  )
  const newEquation = Array.from(
    modifyEquaionArray(equationArr, OperationValue, indexOfOprand)
  )

  console.log("new equation", newEquation, Array.isArray(newEquation))
  console.log("new oprands left", sortedOprands, Array.isArray(newEquation))
  return calc(newEquation, sortedOprands) //returning final value
}

export function bindNumbers(eq) {
  console.log("inside bind export function")
  const arr = []
  let temp = ""
  eq.forEach((element, index) => {
    if (index == eq.length - 1) {
      arr.push(temp + element)
    }
    if (isMathOperator(element)) {
      arr.push(temp)
      arr.push(element)
      temp = ""
    } else {
      temp += element
    }
  })
  return arr
}

export function doOperation(a, b, operator) {
  switch (operator) {
    case "*":
      {
        console.log("multiply operation done")

        return a * b
      }
      break
    case "/":
      {
        console.log("devide operation done")
        return a / b
      }
      break
    case "+":
      {
        console.log("addition done")
        return parseFloat(a) + parseFloat(b)
      }
      break
    case "-":
      {
        console.log("subraction done")
        return a - b
      }
      break
    case "^":
      {
        console.log("subraction done")
        return power(a, b)
      }
      break

    default:
      console.log("not a valid operator")
      break
  }
}

export function modifyEquaionArray(arr, value, index) {
  let a = arr
  console.log(a)
  a.splice(index - 1, 3, value)
  // console.log("new passed arr" + a)
  return a
}

export function isValidEquation(equation) {
  console.log([...equation])
  const equationArr = [...equation]
  const isValid = equationArr.every((value) => {
    return !isNumber(value) || isMathOperator(value)
  })
  if (isValid) return true
  return false
}

export function power(x, n) {
  if (n < 1) {
    return 1
  }
  let pow = x * power(x, n - 1)
  return pow
}

function handelBrackets(arr) {
  if (!arr.includes("(")) return arr
  let i = arr.indexOf("(")
  let j = arr.indexOf(")")
  let range = j - i
  arr.splice(i, range + 1, calc(arr.slice(i + 1, j)))
  return arr
}
