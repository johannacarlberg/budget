export class Income {
  id: number;
  name: string = '';
  amount: number;
  complete: boolean;
  date: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
