import { TestBed } from '@angular/core/testing';

import { S3searchService } from './s3search.service';

describe('S3searchService', () => {
  let service: S3searchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3searchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
