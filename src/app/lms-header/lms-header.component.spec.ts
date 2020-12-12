import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsHeaderComponent } from './lms-header.component';

describe('LmsHeaderComponent', () => {
  let component: LmsHeaderComponent;
  let fixture: ComponentFixture<LmsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
