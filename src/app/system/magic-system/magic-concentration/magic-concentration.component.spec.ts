import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicConcentrationComponent } from './magic-concentration.component';

describe('MagicConcentrationComponent', () => {
  let component: MagicConcentrationComponent;
  let fixture: ComponentFixture<MagicConcentrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicConcentrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicConcentrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
