import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheElvenWarComponent } from './the-elven-war.component';

describe('TheElvenWarComponent', () => {
  let component: TheElvenWarComponent;
  let fixture: ComponentFixture<TheElvenWarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheElvenWarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheElvenWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
