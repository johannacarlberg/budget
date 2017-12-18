import { Injectable } from '@angular/core';
import { Income } from './income';

@Injectable()
export class IncomeDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for incomes
  incomes: Income[] = [];

  constructor() {
  }

  // Simulate POST /incomes
  addIncome(income: Income): IncomeDataService {
    if (!income.id) {
      income.id = ++this.lastId;
    }
    this.incomes.push(income);
    return this;
  }

  // Simulate DELETE /incomes/:id
  deleteIncomeById(id: number): IncomeDataService {
    this.incomes = this.incomes
      .filter(income => income.id !== id);
    return this;
  }

  // Simulate PUT /incomes/:id
  updateIncomeById(id: number, values: Object = {}): Income {
    let income = this.getIncomeById(id);
    if (!income) {
      return null;
    }
    Object.assign(income, values);
    return income;
  }

  // Simulate GET /incomes
  getAllIncomes(): Income[] {
    return this.incomes;
  }

  // Simulate GET /incomes/:id
  getIncomeById(id: number): Income {
    return this.incomes
      .filter(income => income.id === id)
      .pop();
  }

  // Toggle income complete
  toggleIncomeComplete(income: Income){
    let updatedIncome = this.updateIncomeById(income.id, {
      complete: !income.complete
    });
    return updatedIncome;
  }
}
