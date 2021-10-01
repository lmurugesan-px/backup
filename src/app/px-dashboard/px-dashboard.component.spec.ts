import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxDashboardComponent } from './px-dashboard.component';

describe('PxDashboardComponent', () => {
  let component: PxDashboardComponent;
  let fixture: ComponentFixture<PxDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
