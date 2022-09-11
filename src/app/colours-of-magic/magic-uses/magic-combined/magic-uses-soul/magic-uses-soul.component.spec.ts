import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesSoulComponent } from './magic-uses-soul.component';

describe('MagicUsesSoulComponent', () => {
  let component: MagicUsesSoulComponent;
  let fixture: ComponentFixture<MagicUsesSoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesSoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesSoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
