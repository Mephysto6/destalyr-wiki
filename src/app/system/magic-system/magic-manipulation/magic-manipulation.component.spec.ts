import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicManipulationComponent } from './magic-manipulation.component';

describe('MagicManipulationComponent', () => {
  let component: MagicManipulationComponent;
  let fixture: ComponentFixture<MagicManipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicManipulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
