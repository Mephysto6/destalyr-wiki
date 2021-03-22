import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicSystemExplanationComponent } from './magic-system-explanation.component';

describe('MagicSystemExplanationComponent', () => {
  let component: MagicSystemExplanationComponent;
  let fixture: ComponentFixture<MagicSystemExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicSystemExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicSystemExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
