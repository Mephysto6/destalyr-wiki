import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

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

  fr_text(num : number) {
    if (num == 1) {
      return "Attaque"
    }
    if (num == 2) {
      return "Défense"
    }
    if (num == 3) {
      return "Magie"
    }
  }

  en_text(num : number) {
    if (num == 1) {
      return "Attack"
    }
    if (num == 2) {
      return "Defense"
    }
    if (num == 3) {
      return "Magic"
    }
  }

  show_text(num : number, language: String): String {
    if (language == "fr") {
      return this.fr_text(num)
    }
    if (language == "en") {
      return this.en_text(num)
    }
  }
  
}
