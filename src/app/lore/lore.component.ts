import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../page-language.service";

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.css']
})
export class LoreComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

  fr_text(num : number) {
    if (num == 1) {
      return "Histoire"
    }
    if (num == 2) {
      return "Religion"
    }
    if (num == 3) {
      return "Races"
    }
    if (num == 4) {
      return "Magie"
    }
    if (num == 5) {
      return "Geographie"
    }
    if (num == 6) {
      return "Citadelle"
    }
  }

  en_text(num : number) {
    if (num == 1) {
      return "History"
    }
    if (num == 2) {
      return "Religion"
    }
    if (num == 3) {
      return "Races"
    }
    if (num == 4) {
      return "Magic"
    }
    if (num == 5) {
      return "Geography"
    }
    if (num == 6) {
      return "Citadelle"
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
