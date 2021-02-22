import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDefenseComponent } from './skills-defense.component';

describe('SkillsDefenseComponent', () => {
  let component: SkillsDefenseComponent;
  let fixture: ComponentFixture<SkillsDefenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDefenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
