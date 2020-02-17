import { TestBed } from '@angular/core/testing';

import { ReloadtoolService } from './reloadtool.service';

describe('ReloadtoolService', () => {
  let service: ReloadtoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadtoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
