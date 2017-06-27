import { Component } from '@angular/core';

@Component({
	selector : 'greet',
	template : `
		<label> Name : </label>
		<input type="text" [(ngModel)]="name" />
		<input type="button" value="Greet" (click)="onGreetClick()"/>
		<div>{{message}}</div>
	`
})
export class GreetComponent{
	message : string = '';
	name : string = '';
	onGreetClick(){
		//const name = prompt('Enter your name :');
		this.message = `Hi ${this.name}, Have a nice day!`;
	}
}