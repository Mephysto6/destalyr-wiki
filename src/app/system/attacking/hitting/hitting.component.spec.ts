import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HittingComponent } from './hitting.component';

describe('HittingComponent', () => {
  let component: HittingComponent;
  let fixture: ComponentFixture<HittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HittingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
