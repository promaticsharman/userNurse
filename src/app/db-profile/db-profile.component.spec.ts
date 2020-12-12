import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbProfileComponent } from './db-profile.component';

describe('DbProfileComponent', () => {
  let component: DbProfileComponent;
  let fixture: ComponentFixture<DbProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
