class Calculator {
  sum(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }
  mul(a, b) {
    return a * b;
  }
  div(a, b) {
    return a / b;
  }
}

class StaticCalculator {
  static sum(a, b) {
    return a + b;
  }
  static sub(a, b) {
    return a - b;
  }
  static mul(a, b) {
    return a * b;
  }
  static div(a, b) {
    return a / b;
  }
}


const myCalculator = new Calculator();

console.log(myCalculator.sum(4,2));
console.log(myCalculator.sub(4,2));
console.log(myCalculator.mul(4,2));
console.log(myCalculator.div(4,2));
console.log(StaticCalculator.sum(5,12));
console.log(StaticCalculator.sub(5,12));
console.log(StaticCalculator.mul(5,12));
console.log(StaticCalculator.div(5,12));



