import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesThunderComponent } from './magic-uses-thunder.component';

describe('MagicUsesThunderComponent', () => {
  let component: MagicUsesThunderComponent;
  let fixture: ComponentFixture<MagicUsesThunderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesThunderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesThunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
