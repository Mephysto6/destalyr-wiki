import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicColorsComponent } from './magic-colors.component';

describe('MagicColorsComponent', () => {
  let component: MagicColorsComponent;
  let fixture: ComponentFixture<MagicColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
