import { TestBed } from '@angular/core/testing';

import { BigparentService } from './bigparent.service';

describe('BigparentService', () => {
  let service: BigparentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigparentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
