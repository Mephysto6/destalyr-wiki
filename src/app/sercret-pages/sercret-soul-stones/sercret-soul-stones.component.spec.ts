import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercretSoulStonesComponent } from './sercret-soul-stones.component';

describe('SercretSoulStonesComponent', () => {
  let component: SercretSoulStonesComponent;
  let fixture: ComponentFixture<SercretSoulStonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercretSoulStonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercretSoulStonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
