import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesComponent } from './magic-uses.component';

describe('MagicUsesComponent', () => {
  let component: MagicUsesComponent;
  let fixture: ComponentFixture<MagicUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
