import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyuneComponent } from './lyune.component';

describe('LyuneComponent', () => {
  let component: LyuneComponent;
  let fixture: ComponentFixture<LyuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
