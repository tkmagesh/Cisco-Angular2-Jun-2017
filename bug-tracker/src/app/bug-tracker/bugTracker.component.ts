import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/BugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{

	bugs : Array<IBug> = [];

	bugName : string = '';
	
	sortBugBy : string = '';

	//bugOperations : BugOperationsService = new BugOperationsService();

	constructor(private bugOperations : BugOperationsService){

	}

	onAddNewClick() : void {
		const newBug = this.bugOperations.createNew(this.bugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bug) : void {
		let toggledBug = this.bugOperations.toggle(bug);
		this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}
	
	onRemoveClosedClick() : void {
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount() : number {
		console.log('getClosedCount triggered');
		let result : number = 0;
		for(let index = 0; index < this.bugs.length; index++)
			if (this.bugs[index].isClosed)
				++result;
		return result;
	}
}

