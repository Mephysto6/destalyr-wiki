import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesPurificationComponent } from './magic-uses-purification.component';

describe('MagicUsesPurificationComponent', () => {
  let component: MagicUsesPurificationComponent;
  let fixture: ComponentFixture<MagicUsesPurificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesPurificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesPurificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
