import { TestBed } from '@angular/core/testing';

import { SerbisyoService } from './serbisyo.service';

describe('SerbisyoService', () => {
  let service: SerbisyoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerbisyoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
