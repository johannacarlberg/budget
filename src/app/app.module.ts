import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IncomeComponent } from "./Incomes/income.component";
import { ExpenseComponent } from "./Expenses/expense.component";
import { routing } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    ExpenseComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
