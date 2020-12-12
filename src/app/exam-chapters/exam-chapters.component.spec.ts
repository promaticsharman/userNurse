import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamChaptersComponent } from './exam-chapters.component';

describe('ExamChaptersComponent', () => {
  let component: ExamChaptersComponent;
  let fixture: ComponentFixture<ExamChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
