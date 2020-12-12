import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbPurchasedExamsComponent } from './db-purchased-exams.component';

describe('DbPurchasedExamsComponent', () => {
  let component: DbPurchasedExamsComponent;
  let fixture: ComponentFixture<DbPurchasedExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbPurchasedExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbPurchasedExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
