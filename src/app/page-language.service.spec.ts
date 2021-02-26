import { TestBed } from '@angular/core/testing';

import { PageLanguageService } from './page-language.service';

describe('PageLanguageService', () => {
  let service: PageLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
