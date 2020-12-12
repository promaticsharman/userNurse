import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsExamStartedComponent } from './lms-exam-started.component';

describe('LmsExamStartedComponent', () => {
  let component: LmsExamStartedComponent;
  let fixture: ComponentFixture<LmsExamStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsExamStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsExamStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
