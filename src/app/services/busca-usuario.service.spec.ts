import { TestBed } from '@angular/core/testing';

import { BuscaUsuarioService } from './busca-usuario.service';

describe('BuscaUsuarioService', () => {
  let service: BuscaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
