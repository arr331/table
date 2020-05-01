import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollStudentComponent } from './payroll-student.component';

describe('PayrollStudentComponent', () => {
  let component: PayrollStudentComponent;
  let fixture: ComponentFixture<PayrollStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
