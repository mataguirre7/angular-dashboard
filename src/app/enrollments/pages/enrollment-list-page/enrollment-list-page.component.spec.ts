import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentListPageComponent } from './enrollment-list-page.component';

describe('EnrollmentListPageComponent', () => {
  let component: EnrollmentListPageComponent;
  let fixture: ComponentFixture<EnrollmentListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollmentListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
