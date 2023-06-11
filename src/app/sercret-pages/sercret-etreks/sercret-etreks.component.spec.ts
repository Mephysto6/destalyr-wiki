import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercretEtreksComponent } from './sercret-etreks.component';

describe('SercretEtreksComponent', () => {
  let component: SercretEtreksComponent;
  let fixture: ComponentFixture<SercretEtreksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercretEtreksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercretEtreksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
