import { BugOperationsService } from './BugOperations.service';
import { IBug } from '../models/IBug';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class BugStorageService{
	private storage : Storage = window.localStorage;
	private currentBugId : number = 0;

	public onChange : EventEmitter<void> = new EventEmitter<void>();

	constructor(private bugOperations : BugOperationsService){
		//window.onstorage = this.onStorageChange.bind(this);
		//window.onstorage = (_) => this.onStorageChange();
		window.onstorage = (_) => this.onChange.emit();
	}
	onStorageChange(){
		this.onChange.emit();
	}
	getAll() : Array<IBug>{
		let result : Array<IBug> = [];
		for(let index = 0; index < this.storage.length; index++){
			let data = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(data);
			this.currentBugId = this.currentBugId < bug.id ? bug.id : this.currentBugId;
			result.push(bug);
		}
		return result;
	}
	private save(bug:IBug) : void{
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	addNew(bugName : string) : IBug{
		var newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}
	toggle(bug : IBug) : IBug{
		let toggledBug = this.bugOperations.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(bug : IBug) : void {
		this.storage.removeItem(bug.id.toString());
	}
}