import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable()
export class ExpenseDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for expenses
  expenses: Expense[] = [];

  constructor() {
  }

  // Simulate POST /expenses
  addExpense(expense: Expense): ExpenseDataService {
    if (!expense.id) {
      expense.id = ++this.lastId;
    }
    this.expenses.push(expense);
    return this;
  }

  // Simulate DELETE /expenses/:id
  deleteExpenseById(id: number): ExpenseDataService {
    this.expenses = this.expenses
      .filter(expense => expense.id !== id);
    return this;
  }

  // Simulate PUT /expenses/:id
  updateExpenseById(id: number, values: Object = {}): Expense {
    let expense = this.getExpenseById(id);
    if (!expense) {
      return null;
    }
    Object.assign(expense, values);
    return expense;
  }

  // Simulate GET /expenses
  getAllExpenses(): Expense[] {
    return this.expenses;
  }

  getAllExpensesSum(): number {
    let expenseSum: number = 0;
    this.expenses.forEach(expense => {
      expenseSum += expense.amount;
    });
    return expenseSum;
  }

  // Simulate GET /expenses/:id
  getExpenseById(id: number): Expense {
    return this.expenses
      .filter(expense => expense.id === id)
      .pop();
  }

  // Toggle expense complete
  toggleExpenseComplete(expense: Expense){
    let updatedExpense = this.updateExpenseById(expense.id, {
      complete: !expense.complete
    });
    return updatedExpense;
  }
}
