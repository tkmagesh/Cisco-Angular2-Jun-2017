import { IBug } from '../models/IBug';

export class BugOperationsService{
	private id : number = 0;

	createNew(bugName : string) : IBug{
		const newBug = {
			id : ++this.id,
			name : bugName,
			isClosed : false
		};
		return newBug;
	}
	toggle(bug : IBug) : IBug{
		return {
			id : bug.id,
			name : bug.name,
			isClosed : !bug.isClosed
		}
	}
}