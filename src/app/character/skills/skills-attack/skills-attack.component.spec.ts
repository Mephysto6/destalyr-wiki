import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAttackComponent } from './skills-attack.component';

describe('SkillsAttackComponent', () => {
  let component: SkillsAttackComponent;
  let fixture: ComponentFixture<SkillsAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
