import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbClassroomComponent } from './db-classroom.component';

describe('DbClassroomComponent', () => {
  let component: DbClassroomComponent;
  let fixture: ComponentFixture<DbClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
