import { TestBed, inject } from '@angular/core/testing';

import { GetClassifyService } from './get-classify.service';

describe('GetClassifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetClassifyService]
    });
  });

  it('should be created', inject([GetClassifyService], (service: GetClassifyService) => {
    expect(service).toBeTruthy();
  }));
});
