import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../page-language.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

  fr_text(num : number) {
    if (num == 1) {
      return "Création"
    }
    if (num == 2) {
      return "Magie"
    }
    if (num == 3) {
      return "Stats"
    }
    if (num == 4) {
      return "Compétences"
    }
    if (num == 5) {
      return "Connaissances"
    }
  }

  en_text(num : number) {
    if (num == 1) {
      return "Creation"
    }
    if (num == 2) {
      return "Magic"
    }
    if (num == 3) {
      return "Stats"
    }
    if (num == 4) {
      return "Skills"
    }
    if (num == 5) {
      return "Knowledge"
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
