import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesIceComponent } from './magic-uses-ice.component';

describe('MagicUsesIceComponent', () => {
  let component: MagicUsesIceComponent;
  let fixture: ComponentFixture<MagicUsesIceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesIceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesIceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
