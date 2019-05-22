import { TestBed } from '@angular/core/testing';

import { TemplateLibService } from './template-lib.service';

describe('TemplateLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplateLibService = TestBed.get(TemplateLibService);
    expect(service).toBeTruthy();
  });
});
