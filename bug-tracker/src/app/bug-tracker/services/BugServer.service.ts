import { Injectable } from '@angular/core';

import { IBug } from '../models/IBug';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BugOperationsService } from './BugOperations.service';

@Injectable()
export class BugServerService{
	private serviceBaseUrl : string = 'http://localhost:3000/bugs';

	constructor(private http : Http, private bugOperations : BugOperationsService){

	}
	getAll() : Observable<Array<IBug>>{
		return this.http
			.get(this.serviceBaseUrl)
			.map(response => response.json());
	}
	addNew(bugName : string) : Observable<IBug>{
		var newBugData = this.bugOperations.createNew(0, bugName);
		return this.http
			.post(this.serviceBaseUrl, newBugData)
			.map(response => response.json());
	}
	toggle(bug : IBug) : Observable<IBug> {
		var toggledBug = this.bugOperations.toggle(bug);
		return this.http
			.put(`${this.serviceBaseUrl}/${toggledBug.id}`, toggledBug)
			.map(response => response.json())
	}
}
