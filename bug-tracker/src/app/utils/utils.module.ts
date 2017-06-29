import { NgModule } from '@angular/core'
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { OrderByPipe } from './pipes/OrderBy.pipe';
import { TrimTextPipe } from './pipes/trimText.pipe';

const ALL_PIPES = [
	ElapsedPipe,
	TrimTextPipe,
	OrderByPipe
];

@NgModule({
	declarations : ALL_PIPES,
	exports : ALL_PIPES
})
export class UtilsModule{

}