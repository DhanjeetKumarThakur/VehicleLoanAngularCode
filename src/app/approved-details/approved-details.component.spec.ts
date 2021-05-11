import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedDetailsComponent } from './approved-details.component';

describe('ApprovedDetailsComponent', () => {
  let component: ApprovedDetailsComponent;
  let fixture: ComponentFixture<ApprovedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
