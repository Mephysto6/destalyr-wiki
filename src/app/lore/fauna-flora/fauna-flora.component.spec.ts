import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaunaFloraComponent } from './fauna-flora.component';

describe('FaunaFloraComponent', () => {
  let component: FaunaFloraComponent;
  let fixture: ComponentFixture<FaunaFloraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaunaFloraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaunaFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
