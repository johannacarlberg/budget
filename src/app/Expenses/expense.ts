export class Expense {
  id: number;
  name: string = '';
  category: string = '';
  amount: number;
  complete: boolean;
  date: Date = new Date();
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
