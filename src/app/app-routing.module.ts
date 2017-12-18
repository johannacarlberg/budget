import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { IncomeComponent } from "./Incomes/income.component";
import { ExpenseComponent } from "./Expenses/expense.component";


const routes: Routes = [
  { path: 'incomes', component: IncomeComponent },
  { path: 'expenses', component: ExpenseComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
