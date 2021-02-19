import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNewWarComponent } from './the-new-war.component';

describe('TheNewWarComponent', () => {
  let component: TheNewWarComponent;
  let fixture: ComponentFixture<TheNewWarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheNewWarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheNewWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
