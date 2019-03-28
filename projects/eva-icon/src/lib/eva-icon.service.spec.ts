import { TestBed } from '@angular/core/testing';

import { EvaIconService } from './eva-icon.service';

describe('EvaIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaIconService = TestBed.get(EvaIconService);
    expect(service).toBeTruthy();
  });
});
