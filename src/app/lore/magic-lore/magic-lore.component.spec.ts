import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicLoreComponent } from './magic-lore.component';

describe('MagicLoreComponent', () => {
  let component: MagicLoreComponent;
  let fixture: ComponentFixture<MagicLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicLoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
