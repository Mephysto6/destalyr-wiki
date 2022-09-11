import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesAnimalComponent } from './magic-uses-animal.component';

describe('MagicUsesAnimalComponent', () => {
  let component: MagicUsesAnimalComponent;
  let fixture: ComponentFixture<MagicUsesAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
