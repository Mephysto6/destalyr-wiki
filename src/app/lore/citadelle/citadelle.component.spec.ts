import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitadelleComponent } from './citadelle.component';

describe('CitadelleComponent', () => {
  let component: CitadelleComponent;
  let fixture: ComponentFixture<CitadelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitadelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitadelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
