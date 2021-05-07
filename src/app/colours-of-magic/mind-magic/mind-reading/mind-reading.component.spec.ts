import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindReadingComponent } from './mind-reading.component';

describe('MindReadingComponent', () => {
  let component: MindReadingComponent;
  let fixture: ComponentFixture<MindReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
