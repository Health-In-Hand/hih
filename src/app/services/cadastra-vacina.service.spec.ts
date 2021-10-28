import { TestBed } from '@angular/core/testing';

import { CadastraVacinaService } from './cadastra-vacina.service';

describe('CadastraVacinaService', () => {
  let service: CadastraVacinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastraVacinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
