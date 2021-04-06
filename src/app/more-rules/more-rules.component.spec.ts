import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreRulesComponent } from './more-rules.component';

describe('MoreRulesComponent', () => {
  let component: MoreRulesComponent;
  let fixture: ComponentFixture<MoreRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
