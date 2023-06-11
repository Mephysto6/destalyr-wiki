import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercretPagesComponent } from './sercret-pages.component';

describe('SercretPagesComponent', () => {
  let component: SercretPagesComponent;
  let fixture: ComponentFixture<SercretPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercretPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercretPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
