import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/BugStorage.service';

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

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}

	onAddNewClick() : void {
		const newBug = this.bugStorage.addNew(this.bugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bug) : void {
		let toggledBug = this.bugStorage.toggle(bug);
		this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}
	
	onRemoveClosedClick() : void {
		/*let bugsToRemove = this.bugs.filter(bug => bug.isClosed);
		bugsToRemove.forEach(bug => this.bugStorage.remove(bug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);*/

		this.bugs = this.bugs.reduce((result, bug) => {
			if (bug.isClosed){
				this.bugStorage.remove(bug);
				return result;
			}
			return [...result, bug];
		}, []);
	}
}

