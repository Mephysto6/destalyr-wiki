import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMagicComponent } from './skills-magic.component';

describe('SkillsMagicComponent', () => {
  let component: SkillsMagicComponent;
  let fixture: ComponentFixture<SkillsMagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsMagicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
