import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercretLyunesComponent } from './sercret-lyunes.component';

describe('SercretLyunesComponent', () => {
  let component: SercretLyunesComponent;
  let fixture: ComponentFixture<SercretLyunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercretLyunesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercretLyunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
