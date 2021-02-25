import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicElementalComponent } from './magic-elemental.component';

describe('MagicElementalComponent', () => {
  let component: MagicElementalComponent;
  let fixture: ComponentFixture<MagicElementalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicElementalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicElementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
