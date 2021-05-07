import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindSlowingComponent } from './mind-slowing.component';

describe('MindSlowingComponent', () => {
  let component: MindSlowingComponent;
  let fixture: ComponentFixture<MindSlowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindSlowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindSlowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
