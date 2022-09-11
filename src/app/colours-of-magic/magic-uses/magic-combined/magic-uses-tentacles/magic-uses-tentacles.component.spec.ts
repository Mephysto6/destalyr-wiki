import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesTentaclesComponent } from './magic-uses-tentacles.component';

describe('MagicUsesTentaclesComponent', () => {
  let component: MagicUsesTentaclesComponent;
  let fixture: ComponentFixture<MagicUsesTentaclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesTentaclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesTentaclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
