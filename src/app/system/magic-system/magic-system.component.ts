import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-magic-system',
  templateUrl: './magic-system.component.html',
  styleUrls: ['./magic-system.component.css']
})
export class MagicSystemComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

  fr_text(num : number) {
    if (num == 1) {
      return "Création"
    }
    if (num == 2) {
      return "Manipulation"
    }
    if (num == 3) {
      return "Ordres de Grandeur"
    }
    if (num == 4) {
      return "Magie de Groupe"
    }
  }

  en_text(num : number) {
    if (num == 1) {
      return "Creation"
    }
    if (num == 2) {
      return "Manipulation"
    }
    if (num == 3) {
      return "Ballparks"
    }
    if (num == 4) {
      return "Group Magic"
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
