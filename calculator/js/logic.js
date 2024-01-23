import { print } from './utils/print.js'

class Calculation {
	constructor() {
		this.calculationLine = '';
		this.result = 0;
	}

	deleteLastSymbol() {
		this.calculationLine = this.calculationLine.slice(0, -1);
		print(this.calculationLine || this.result);
	}

	addSymbol(char) {
		if (this.calculationLine === '') {
			if (this.result !== 0 && /[+\-x/]/.test(char)) {
				this.calculationLine = this.result;
			} else if (/[+\-x/]/.test(char)) {
				this.calculationLine = '';
			}
		}
		this.calculationLine += `${char}`;
		print(this.calculationLine || this.result);
	}

	calculate() {
		this.result = eval(this.calculationLine.replace('x', '*'));
		this.calculationLine = '';
		print(this.result);
	}
}

const main = () => {
		const calculator = new Calculation();

    return (state) => {
			switch (state) {
				case "С":
					calculator.calculationLine = '';
					calculator.result = 0;
					print(calculator.result);
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