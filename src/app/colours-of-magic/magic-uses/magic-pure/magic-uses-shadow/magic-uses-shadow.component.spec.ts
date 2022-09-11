import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesShadowComponent } from './magic-uses-shadow.component';

describe('MagicUsesShadowComponent', () => {
  let component: MagicUsesShadowComponent;
  let fixture: ComponentFixture<MagicUsesShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesShadowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
