import { Component } from '@angular/core';
import { PageLanguageService } from "./page-language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PageLanguageService],
})
export class AppComponent {
  title = 'Destalyr Wiki';

  fr_text(num : number) {
    if (num == 1) {
      return "Accueil"
    }
    if (num == 2) {
      return "Lore"
    }
    if (num == 3) {
      return "Système"
    }
    if (num == 4) {
      return "Personnage"
    }
  }

  en_text(num : number) {
    if (num == 1) {
      return "Home"
    }
    if (num == 2) {
      return "Lore"
    }
    if (num == 3) {
      return "System"
    }
    if (num == 4) {
      return "Character"
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
  
  constructor(public langue: PageLanguageService) {
    
  }
}
