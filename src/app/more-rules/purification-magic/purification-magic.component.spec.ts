import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurificationMagicComponent } from './purification-magic.component';

describe('PurificationMagicComponent', () => {
  let component: PurificationMagicComponent;
  let fixture: ComponentFixture<PurificationMagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurificationMagicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurificationMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
