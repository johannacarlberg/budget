import { TestBed, inject } from '@angular/core/testing';

import { IncomeDataService } from './income-data.service';

describe('IncomeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncomeDataService]
    });
  });

  it('should be created', inject([IncomeDataService], (service: IncomeDataService) => {
    expect(service).toBeTruthy();
  }));
});
