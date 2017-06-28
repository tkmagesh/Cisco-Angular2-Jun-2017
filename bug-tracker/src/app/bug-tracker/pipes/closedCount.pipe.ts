import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name : 'closedCount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform{
	transform(bugs : Array<IBug>) : number{
		console.log('closedCount pipe invoked');
		let result : number = 0;
		for(let index = 0; index < bugs.length; index++)
			if (bugs[index].isClosed)
				++result;
		return result;
	}
}