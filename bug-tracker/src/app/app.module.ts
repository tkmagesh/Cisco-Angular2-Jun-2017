import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { BugOperationsService } from './bug-tracker/services/BugOperations.service';
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { OrderByPipe } from './bug-tracker/pipes/OrderBy.pipe';
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';
import { BugStorageService } from './bug-tracker/services/BugStorage.service';
import { ElapsedPipe } from './bug-tracker/pipes/elapsed.pipe';
import { BugEditComponent } from './bug-tracker/bug-edit/bugEdit.component';


@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    OrderByPipe,
    ClosedCountPipe,
    ElapsedPipe,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BugOperationsService, BugStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
