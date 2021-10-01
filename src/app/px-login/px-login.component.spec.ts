import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxLoginComponent } from './px-login.component';

describe('PxLoginComponent', () => {
  let component: PxLoginComponent;
  let fixture: ComponentFixture<PxLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
