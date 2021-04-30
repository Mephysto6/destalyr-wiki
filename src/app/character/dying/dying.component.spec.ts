import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyingComponent } from './dying.component';

describe('DyingComponent', () => {
  let component: DyingComponent;
  let fixture: ComponentFixture<DyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
