import { TestBed } from '@angular/core/testing';

import { JsonPLaceholderService } from './json-placeholder.service';

describe('JsonPLaceholderService', () => {
  let service: JsonPLaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPLaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
