import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLibComponent } from './template-lib.component';

describe('TemplateLibComponent', () => {
  let component: TemplateLibComponent;
  let fixture: ComponentFixture<TemplateLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
