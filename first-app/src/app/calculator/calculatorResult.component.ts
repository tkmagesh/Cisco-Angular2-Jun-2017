import { Component, Input } from '@angular/core';

@Component({
	selector : 'calculator-result',
	template : '<div>{{data}}</div>',
	styles : ['div {font-size : 22pt}']
})
export class CalculatorResultComponent{

	@Input('result')
	data : any = null;
}