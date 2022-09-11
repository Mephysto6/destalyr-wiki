import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesFireComponent } from './magic-uses-fire.component';

describe('MagicUsesFireComponent', () => {
  let component: MagicUsesFireComponent;
  let fixture: ComponentFixture<MagicUsesFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesFireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
