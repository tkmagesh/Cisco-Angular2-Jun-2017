import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'orderBy'
})
export class OrderByPipe implements PipeTransform {
	transform(data : Array<any> = [], attrName : string, isDescending : boolean = false) : Array<any> {
		let comparer = getComparer(attrName);
		if (isDescending){
			comparer = getDescendingComparer(comparer);
		}
		for(let i = 0; i < data.length-1; i++)
			for(let j = i + 1; j < data.length; j++)
				if (comparer(data[i], data[j]) > 0)
					[data[i], data[j]] = [data[j], data[i]];
		return data;
	}
}

interface IComparer{
	(item1 : any, item2 : any) : number
}

function getDescendingComparer(comparer : IComparer) : IComparer{
	return function(item1 : any, item2 : any){
		return comparer.apply(undefined, arguments) * -1;
	}
}
function getComparer(attrName : string) : IComparer {
	return function(item1 : any, item2 : any) : number {
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}