import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindBoostingComponent } from './mind-boosting.component';

describe('MindBoostingComponent', () => {
  let component: MindBoostingComponent;
  let fixture: ComponentFixture<MindBoostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindBoostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindBoostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
