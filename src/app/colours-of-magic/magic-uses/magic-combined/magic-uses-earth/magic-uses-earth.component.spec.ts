import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesEarthComponent } from './magic-uses-earth.component';

describe('MagicUsesEarthComponent', () => {
  let component: MagicUsesEarthComponent;
  let fixture: ComponentFixture<MagicUsesEarthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesEarthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesEarthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
