import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesLightComponent } from './magic-uses-light.component';

describe('MagicUsesLightComponent', () => {
  let component: MagicUsesLightComponent;
  let fixture: ComponentFixture<MagicUsesLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
