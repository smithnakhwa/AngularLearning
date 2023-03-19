import { TestBed } from '@angular/core/testing';

import { WipiService } from './wipi.service';

describe('WipiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WipiService = TestBed.get(WipiService);
    expect(service).toBeTruthy();
  });
});
