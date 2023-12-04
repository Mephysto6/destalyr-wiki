import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";
import { SkillButtonComponent } from './skill-button/skill-button.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
