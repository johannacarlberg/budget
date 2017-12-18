import { TestBed, inject } from '@angular/core/testing';

import { ExpenseDataService } from './expense-data.service';

describe('IncomeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenseDataService]
    });
  });

  it('should be created', inject([ExpenseDataService], (service: ExpenseDataService) => {
    expect(service).toBeTruthy();
  }));
});
