import { TestBed } from '@angular/core/testing';

import { PajaxService } from './pajax.service';

describe('PajaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PajaxService = TestBed.get(PajaxService);
    expect(service).toBeTruthy();
  });
});
