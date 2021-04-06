import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFlowchartComponent } from './action-flowchart.component';

describe('ActionFlowchartComponent', () => {
  let component: ActionFlowchartComponent;
  let fixture: ComponentFixture<ActionFlowchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionFlowchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionFlowchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
