import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{

	bugs : Array<IBug> = [];

	onAddNewClick(bugName : string){
		const newBug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugClick(bug){
		bug.isClosed = !bug.isClosed;
	}
}

