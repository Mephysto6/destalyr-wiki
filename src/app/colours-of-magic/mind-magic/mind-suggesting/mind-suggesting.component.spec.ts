import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindSuggestingComponent } from './mind-suggesting.component';

describe('MindSuggestingComponent', () => {
  let component: MindSuggestingComponent;
  let fixture: ComponentFixture<MindSuggestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindSuggestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindSuggestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
