import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-skills-attack',
  templateUrl: './skills-attack.component.html',
  styleUrls: ['./skills-attack.component.css']
})
export class SkillsAttackComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
