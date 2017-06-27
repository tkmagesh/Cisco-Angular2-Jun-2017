import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator',
	templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{
	
	model : CalculatorModel = new CalculatorModel();

	onAddClick(){
		this.model.add();
	}

	onSubtractClick(){
		this.model.subtract();
	}

	onMultiplyClick(){
		this.model.multiply();
	}

	onDivideClick(){
		this.model.divide();
	}
}