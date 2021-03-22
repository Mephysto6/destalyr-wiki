import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicVisionComponent } from './magic-vision.component';

describe('MagicVisionComponent', () => {
  let component: MagicVisionComponent;
  let fixture: ComponentFixture<MagicVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
