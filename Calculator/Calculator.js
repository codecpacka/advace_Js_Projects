console.log("calculator")
//when clicked on number element it should print on screen

export class Calculator {
  constructor(value, type) {
    this.value = value
    this.type = type
  }
  static calculate(a, b, oprand) {
    switch (oprand) {
      case "+":
        return a + b
        break
      case "-":
        return a - b
        break
      case "/":
        return a / b
        break
      case "*":
        return a * b
        break

      default:
        alert("invalid oprand ")
        break
    }
  }
}
