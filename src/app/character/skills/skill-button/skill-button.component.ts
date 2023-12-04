import { Component, Input, OnInit } from '@angular/core';
import { SkillsAttackComponent } from '../skills-attack/skills-attack.component';

@Component({
  selector: 'app-skill-button',
  templateUrl: './skill-button.component.html',
  styleUrls: ['./skill-button.component.css'],
})
export class SkillButtonComponent implements OnInit {

  @Input() skill_name !: string;
  @Input() skill_category !: string;
  @Input() header !: string;
  @Input() skill_type !: string;
  @Input() skill_levels !: string;
  @Input() skill_colour !: string;
  show_that_skill : boolean = false ;

  constructor(public AtkComp: SkillsAttackComponent) {  }

  ngOnInit(): void {
  }

  hovertext(skill_category : string, skill_name : string) {
    if (skill_category == "ATK") {
      return this.AtkComp.hovertext(skill_name);
    }
    return ""
  }
  details(skill_category : string, skill_name : string) {
    if (skill_category == "ATK") {
      return this.AtkComp.details(skill_name);
    }
    return ""
  }
}
