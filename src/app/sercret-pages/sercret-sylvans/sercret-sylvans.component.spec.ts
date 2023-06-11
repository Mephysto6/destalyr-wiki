import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercretSylvansComponent } from './sercret-sylvans.component';

describe('SercretSylvansComponent', () => {
  let component: SercretSylvansComponent;
  let fixture: ComponentFixture<SercretSylvansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercretSylvansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercretSylvansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
