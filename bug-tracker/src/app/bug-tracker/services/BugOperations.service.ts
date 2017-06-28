import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(bugName : string) : IBug{
		const newBug = {
			name : bugName,
			isClosed : false
		};
		return newBug;
	}
	toggle(bug : IBug) : void{
		bug.isClosed = !bug.isClosed;
	}
}