import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercretNekaliComponent } from './sercret-nekali.component';

describe('SercretNekaliComponent', () => {
  let component: SercretNekaliComponent;
  let fixture: ComponentFixture<SercretNekaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercretNekaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercretNekaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
