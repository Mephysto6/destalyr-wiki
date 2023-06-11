import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercretDarkElvesComponent } from './sercret-dark-elves.component';

describe('SercretDarkElvesComponent', () => {
  let component: SercretDarkElvesComponent;
  let fixture: ComponentFixture<SercretDarkElvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercretDarkElvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercretDarkElvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
