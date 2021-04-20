import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoursOfMagicComponent } from './colours-of-magic.component';

describe('ColoursOfMagicComponent', () => {
  let component: ColoursOfMagicComponent;
  let fixture: ComponentFixture<ColoursOfMagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoursOfMagicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoursOfMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
