import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NekaliComponent } from './nekali.component';

describe('NekaliComponent', () => {
  let component: NekaliComponent;
  let fixture: ComponentFixture<NekaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NekaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NekaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
