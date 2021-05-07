import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindHallucinatingComponent } from './mind-hallucinating.component';

describe('MindHallucinatingComponent', () => {
  let component: MindHallucinatingComponent;
  let fixture: ComponentFixture<MindHallucinatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindHallucinatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindHallucinatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
