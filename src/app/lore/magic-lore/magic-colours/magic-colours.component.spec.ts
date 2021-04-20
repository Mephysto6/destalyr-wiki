import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicColoursComponent } from './magic-colours.component';

describe('MagicColoursComponent', () => {
  let component: MagicColoursComponent;
  let fixture: ComponentFixture<MagicColoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicColoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicColoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
