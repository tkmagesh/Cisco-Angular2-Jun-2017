import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NewCalculatorComponent } from './calculator/newCalculator.component';
import { CalculatorResultComponent } from './calculator/calculatorResult.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    CalculatorComponent,
    NewCalculatorComponent,
    CalculatorResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
