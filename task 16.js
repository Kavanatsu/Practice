class Calculation {
  constructor() {
    this.calculationLine = '';
  }

  setterCalculationLine(value) {
    this.calculationLine = value;
  }

  setLastSymbolCalculationLine(symbol) {
    this.calculationLine += symbol;
  }

  getterCalculationLine() {
    return this.calculationLine;
  }

  getLastSymbol() {
    return this.calculationLine.slice(-1);
  }

  deleteLastSymbol() {
    this.calculationLine = this.calculationLine.slice(0, -1);
  }
}

const calculation = new Calculation();
console.log(calculation.getterCalculationLine()); 
calculation.setterCalculationLine('2+3*4');
console.log(calculation.getterCalculationLine());
calculation.setLastSymbolCalculationLine('=');
console.log(calculation.getterCalculationLine());
console.log(calculation.getLastSymbol());
calculation.deleteLastSymbol();
console.log(calculation.getterCalculationLine());