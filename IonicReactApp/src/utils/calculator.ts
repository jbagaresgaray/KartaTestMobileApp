class Calculator {
  num1: string;
  num2: string;
  method: string;

  constructor(num1: any, num2: any, method: string) {
    this.num1 = num1;
    this.num2 = num2;
    this.method = method;
  }

  addition(): number {
    return Number(this.num1) + Number(this.num2);
  }

  subtraction() {
    return Number(this.num1) - Number(this.num2);
  }

  multiplication() {
    return Number(this.num1) * Number(this.num2);
  }

  division() {
    return Number(this.num1) / Number(this.num2);
  }

  calculation() {
    switch (this.method) {
      case '+':
        return this.addition();

      case '-':
        return this.subtraction();

      case '*':
        return this.multiplication();

      case '/':
        return this.division();

      default:
        //no sign is found
        return this.num1;
    }
  }
}

export default Calculator;
