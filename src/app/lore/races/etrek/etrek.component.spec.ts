import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtrekComponent } from './etrek.component';

describe('EtrekComponent', () => {
  let component: EtrekComponent;
  let fixture: ComponentFixture<EtrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtrekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
