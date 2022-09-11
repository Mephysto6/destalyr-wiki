import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesAirComponent } from './magic-uses-air.component';

describe('MagicUsesAirComponent', () => {
  let component: MagicUsesAirComponent;
  let fixture: ComponentFixture<MagicUsesAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
