import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDarkElvesStabilisationComponent } from './the-dark-elves-stabilisation.component';

describe('TheDarkElvesStabilisationComponent', () => {
  let component: TheDarkElvesStabilisationComponent;
  let fixture: ComponentFixture<TheDarkElvesStabilisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheDarkElvesStabilisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDarkElvesStabilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
