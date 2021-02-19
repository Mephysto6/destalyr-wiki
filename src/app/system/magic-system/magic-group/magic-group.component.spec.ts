import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicGroupComponent } from './magic-group.component';

describe('MagicGroupComponent', () => {
  let component: MagicGroupComponent;
  let fixture: ComponentFixture<MagicGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
