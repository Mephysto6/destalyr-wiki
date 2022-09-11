import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesWaterComponent } from './magic-uses-water.component';

describe('MagicUsesWaterComponent', () => {
  let component: MagicUsesWaterComponent;
  let fixture: ComponentFixture<MagicUsesWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
