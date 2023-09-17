import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRulesComponent } from './blood-rules.component';

describe('BloodRulesComponent', () => {
  let component: BloodRulesComponent;
  let fixture: ComponentFixture<BloodRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
