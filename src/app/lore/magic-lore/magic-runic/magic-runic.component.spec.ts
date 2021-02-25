import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicRunicComponent } from './magic-runic.component';

describe('MagicRunicComponent', () => {
  let component: MagicRunicComponent;
  let fixture: ComponentFixture<MagicRunicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicRunicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicRunicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
