export class Expense {
  id: number;
  name: string = '';
  category: string = '';
  amount: number;
  complete: boolean;
  date: Date;
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
