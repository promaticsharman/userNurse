import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsIntroductionComponent } from './lms-introduction.component';

describe('LmsIntroductionComponent', () => {
  let component: LmsIntroductionComponent;
  let fixture: ComponentFixture<LmsIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
