import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyhnComponent } from './flyhn.component';

describe('FlyhnComponent', () => {
  let component: FlyhnComponent;
  let fixture: ComponentFixture<FlyhnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyhnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyhnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
