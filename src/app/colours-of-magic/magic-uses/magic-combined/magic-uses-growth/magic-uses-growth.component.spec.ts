import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesGrowthComponent } from './magic-uses-growth.component';

describe('MagicUsesGrowthComponent', () => {
  let component: MagicUsesGrowthComponent;
  let fixture: ComponentFixture<MagicUsesGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesGrowthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
