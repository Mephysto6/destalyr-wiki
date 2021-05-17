import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsExplanationComponent } from './skills-explanation.component';

describe('SkillsExplanationComponent', () => {
  let component: SkillsExplanationComponent;
  let fixture: ComponentFixture<SkillsExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
