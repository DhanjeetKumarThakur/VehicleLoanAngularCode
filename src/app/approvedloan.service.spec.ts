import { TestBed } from '@angular/core/testing';

import { ApprovedloanService } from './approvedloan.service';

describe('ApprovedloanService', () => {
  let service: ApprovedloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovedloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
