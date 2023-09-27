import { TestBed } from '@angular/core/testing';

import { ProductsharedService } from './productshared.service';

describe('ProductsharedService', () => {
  let service: ProductsharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
