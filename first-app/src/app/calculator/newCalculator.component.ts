import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'new-calculator',
	templateUrl : 'newCalculator.template.html'
})
export class NewCalculatorComponent{
	model : CalculatorModel = new CalculatorModel();

	//operation : string = '';

	onCalculateClick(){

		/*switch (this.operation) {
			case "add":
				this.model.add();
				break;
			case "subtract":
				this.model.subtract();
				break;
			case "multiply":
				this.model.multiply();
				break;
			case "divide":
				this.model.divide();
				break;
		}*/
		//this.model[this.operation]();
	}

}