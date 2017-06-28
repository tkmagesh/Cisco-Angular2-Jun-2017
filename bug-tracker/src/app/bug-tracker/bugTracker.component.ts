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
	
	bugOperations : BugOperationsService = new BugOperationsService();
	
	onAddNewClick() : void {
		const newBug = this.bugOperations.createNew(this.bugName);
		this.bugs.push(newBug);
	}

	onBugClick(bug) : void {
		this.bugOperations.toggle(bug);
	}
	
	onRemoveClosedClick() : void {
		for(let index = this.bugs.length-1; index >=0; index--)
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
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

