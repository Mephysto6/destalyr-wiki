import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemExplanationComponent } from './system-explanation.component';

describe('SystemExplanationComponent', () => {
  let component: SystemExplanationComponent;
  let fixture: ComponentFixture<SystemExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
