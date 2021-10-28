import { TestBed } from '@angular/core/testing';

import { CriaVacinaService } from './cria-vacina.service';

describe('CriaVacinaService', () => {
  let service: CriaVacinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriaVacinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
