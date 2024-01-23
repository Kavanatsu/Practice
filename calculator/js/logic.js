import { print } from './utils/print.js'

class Calculation {
	constructor() {
		this.calculationLine = '';
		this.result = 0;
	}

	deleteLastSymbol() {
		this.calculationLine = this.calculationLine.slice(0, -1);
		print(this.calculationLine || this.result.toString());
	}

	addSymbol(char) {
		if (this.calculationLine === '') {
			if (this.result !== 0 && /[+\-x/]/.test(char)) {
				this.calculationLine = this.result.toString();
			} else if (/[+\-x/]/.test(char)) {
				this.calculationLine = '';
			}
		}
		this.calculationLine += `${char}`;
		print(this.calculationLine || this.result.toString());
	}

	calculate() {
		this.result = eval(this.calculationLine.replace('x', '*'));
		this.calculationLine = '';
		print(this.result.toString());
	}
}

const main = () => {
		const calculator = new Calculation();

    return (state) => {
			switch (state) {
				case "С":
					calculator.calculationLine = '';
					calculator.result = 0;
					print(calculator.result.toString());
					break;
				case "АС":
					calculator.deleteLastSymbol();
					break;
				case "=":
					calculator.calculate();
					break;
				default:
					calculator.addSymbol(state)
			}
		}
}

export default main