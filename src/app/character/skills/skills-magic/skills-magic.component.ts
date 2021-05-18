import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-skills-magic',
  templateUrl: './skills-magic.component.html',
  styleUrls: ['./skills-magic.component.css']
})
export class SkillsMagicComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
