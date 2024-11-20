import { TestBed } from '@angular/core/testing';

import { IndicaService } from './indica.service';

describe('IndicaService', () => {
  let service: IndicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
