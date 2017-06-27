import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'new-calculator',
	templateUrl : 'newCalculator.template.html'
})
export class NewCalculatorComponent{
	model : CalculatorModel = new CalculatorModel();

	
}