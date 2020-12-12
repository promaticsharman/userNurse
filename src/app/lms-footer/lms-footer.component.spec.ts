import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsFooterComponent } from './lms-footer.component';

describe('LmsFooterComponent', () => {
  let component: LmsFooterComponent;
  let fixture: ComponentFixture<LmsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
