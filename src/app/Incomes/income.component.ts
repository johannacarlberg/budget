import { Component } from '@angular/core';
import { Income } from "./income";
import { IncomeDataService } from "./income-data.service";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  providers: [IncomeDataService],
  styleUrls: ['../app.component.css'],
})

export class IncomeComponent {

  newIncome: Income = new Income();

  categories = ['Salary', 'Bonus', 'Interest'];

  constructor(private incomeDataService: IncomeDataService) {
  }

  addIncome() {
    this.incomeDataService.addIncome(this.newIncome);
    this.newIncome = new Income();
  }

  toggleIncomeComplete(income) {
    this.incomeDataService.toggleIncomeComplete(income);
  }

  removeIncome(income) {
    this.incomeDataService.deleteIncomeById(income.id);
  }

  get incomes() {
    return this.incomeDataService.getAllIncomes();
  }

}
