import { Component } from '@angular/core';
import { Expense } from "./expense";
import { ExpenseDataService } from "./expense-data.service";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  providers: [ExpenseDataService],
  styleUrls: ['../app.component.css'],
})

export class ExpenseComponent {

  newExpense: Expense = new Expense();

  categories = ['Rent', 'Bills', 'Groceries', 'Restaurant', 'Shopping', 'Holiday', 'Transportation', 'Training', 'Other', 'Savings', 'Entertainment', 'Expenses'];

  constructor(private expenseDataService: ExpenseDataService) {
  }

  addExpense() {
    console.log(this.newExpense);
    this.expenseDataService.addExpense(this.newExpense);
    this.newExpense = new Expense();
  }

  toggleExpenseComplete(expense) {
    this.expenseDataService.toggleExpenseComplete(expense);
  }

  removeExpense(expense) {
    this.expenseDataService.deleteExpenseById(expense.id);
  }

  get expenses() {
    return this.expenseDataService.getAllExpenses();
  }

  get expensesSum() {
    return this.expenseDataService.getAllExpensesSum();
  }

}
