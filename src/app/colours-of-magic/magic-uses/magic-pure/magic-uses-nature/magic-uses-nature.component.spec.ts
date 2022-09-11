import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesNatureComponent } from './magic-uses-nature.component';

describe('MagicUsesNatureComponent', () => {
  let component: MagicUsesNatureComponent;
  let fixture: ComponentFixture<MagicUsesNatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesNatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
