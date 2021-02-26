import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-magic-lore',
  templateUrl: './magic-lore.component.html',
  styleUrls: ['./magic-lore.component.css']
})
export class MagicLoreComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

  fr_text(num : number) {
    if (num == 1) {
      return "Magie Élémentaire"
    }
    if (num == 2) {
      return "Magie Runique"
    }
    if (num == 3) {
      return "Utilisations"
    }
  }

  en_text(num : number) {
    if (num == 1) {
      return "Elemental Magic"
    }
    if (num == 2) {
      return "Runic Magique"
    }
    if (num == 3) {
      return "Magic Uses"
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
