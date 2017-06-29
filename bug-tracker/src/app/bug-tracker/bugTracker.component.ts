import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { Observable } from 'rxjs/Observable';
import { BugServerService } from './services/BugServer.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent implements OnInit{

	bugs : Array<IBug> = [];

	sortBugBy : string = '';

	constructor(private bugServerService : BugServerService){
		
	}

	ngOnInit(){
		this.bugServerService
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
		
	}
	newBugCreated(bugName:string){
		this.bugServerService
			.addNew(bugName)
			.subscribe(newBug => this.bugs = [...this.bugs, newBug]);
	}

	onBugClick(bug) : void {
		this.bugServerService
			.toggle(bug)
			.subscribe(updatedBug => this.bugs = this.bugs.map(bug => bug.id === updatedBug.id ? updatedBug : bug));
	}
	
	onRemoveClosedClick() : void {
		
	}
}

