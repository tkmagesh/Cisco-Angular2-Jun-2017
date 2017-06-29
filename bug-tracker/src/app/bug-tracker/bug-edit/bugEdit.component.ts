import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector : 'bug-edit',
	templateUrl : 'bugEdit.component.html',
	styles : ['section { border : 1px solid black; margin-bottom : 10px; padding : 10px; width : 500px; }']
})
export class BugEditComponent{
	bugName : string = '';

	@Output()
	onNewBug : EventEmitter<string> = new EventEmitter<string>();

	onAddNewClick() : void {
		this.onNewBug.emit(this.bugName);
	}
}