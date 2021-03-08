import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-skills-defense',
  templateUrl: './skills-defense.component.html',
  styleUrls: ['./skills-defense.component.css']
})
export class SkillsDefenseComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
