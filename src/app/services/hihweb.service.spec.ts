import { TestBed } from '@angular/core/testing';

import { HihwebService } from './hihweb.service';

describe('HihwebService', () => {
  let service: HihwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HihwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
