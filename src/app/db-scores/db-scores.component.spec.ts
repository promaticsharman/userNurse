import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbScoresComponent } from './db-scores.component';

describe('DbScoresComponent', () => {
  let component: DbScoresComponent;
  let fixture: ComponentFixture<DbScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
