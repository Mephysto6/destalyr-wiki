import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheElvenTimeComponent } from './the-elven-time.component';

describe('TheElvenTimeComponent', () => {
  let component: TheElvenTimeComponent;
  let fixture: ComponentFixture<TheElvenTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheElvenTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheElvenTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
