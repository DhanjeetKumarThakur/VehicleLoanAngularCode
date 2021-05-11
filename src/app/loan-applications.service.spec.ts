import { TestBed } from '@angular/core/testing';

import { LoanApplicationsService } from './loan-applications.service';

describe('LoanApplicationsService', () => {
  let service: LoanApplicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanApplicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
