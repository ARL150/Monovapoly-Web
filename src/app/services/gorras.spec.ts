import { TestBed } from '@angular/core/testing';

import { Gorras } from './gorras';

describe('Gorras', () => {
  let service: Gorras;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gorras);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
