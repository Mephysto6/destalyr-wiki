import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicCharacterComponent } from './magic-character.component';

describe('MagicCharacterComponent', () => {
  let component: MagicCharacterComponent;
  let fixture: ComponentFixture<MagicCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
