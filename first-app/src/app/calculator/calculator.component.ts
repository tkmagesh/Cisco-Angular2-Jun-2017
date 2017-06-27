import { Component } from '@angular/core';

@Component({
	selector : 'calculator',
	templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{
	number1 : number = 0;
	number2 : number = 0;
	result : number = 0;

	onAddClick(){
		this.result = this.number1 + this.number2;
	}

	onSubtractClick(){
		this.result = this.number1 - this.number2;
	}

	onMultiplyClick(){
		this.result = this.number1 * this.number2;
	}

	onDivideClick(){
		this.result = this.number1 / this.number2;
	}
}