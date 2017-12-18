export class Income {
  id: number;
  name: string = '';
  amount: number;
  complete: boolean;
  date: Date = new Date();

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
