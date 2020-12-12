import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbEnrolledExamsComponent } from './db-enrolled-exams.component';

describe('DbEnrolledExamsComponent', () => {
  let component: DbEnrolledExamsComponent;
  let fixture: ComponentFixture<DbEnrolledExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbEnrolledExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbEnrolledExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
