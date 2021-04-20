import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindMagicComponent } from './mind-magic.component';

describe('MindMagicComponent', () => {
  let component: MindMagicComponent;
  let fixture: ComponentFixture<MindMagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindMagicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
