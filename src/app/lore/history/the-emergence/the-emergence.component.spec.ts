import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheEmergenceComponent } from './the-emergence.component';

describe('TheEmergenceComponent', () => {
  let component: TheEmergenceComponent;
  let fixture: ComponentFixture<TheEmergenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheEmergenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheEmergenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
