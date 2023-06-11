import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercretFlyhnsComponent } from './sercret-flyhns.component';

describe('SercretFlyhnsComponent', () => {
  let component: SercretFlyhnsComponent;
  let fixture: ComponentFixture<SercretFlyhnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercretFlyhnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercretFlyhnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
