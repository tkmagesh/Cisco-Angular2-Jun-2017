import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { BugOperationsService } from './bug-tracker/services/BugOperations.service';
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BugOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
