import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-skills-explanation',
  templateUrl: './skills-explanation.component.html',
  styleUrls: ['./skills-explanation.component.css']
})
export class SkillsExplanationComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
