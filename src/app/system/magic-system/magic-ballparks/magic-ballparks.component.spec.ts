import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicBallparksComponent } from './magic-ballparks.component';

describe('MagicBallparksComponent', () => {
  let component: MagicBallparksComponent;
  let fixture: ComponentFixture<MagicBallparksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicBallparksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicBallparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
