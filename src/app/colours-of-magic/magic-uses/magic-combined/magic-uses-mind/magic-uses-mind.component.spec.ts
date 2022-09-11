import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesMindComponent } from './magic-uses-mind.component';

describe('MagicUsesMindComponent', () => {
  let component: MagicUsesMindComponent;
  let fixture: ComponentFixture<MagicUsesMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesMindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
