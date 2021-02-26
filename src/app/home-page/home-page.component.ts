import { Component, OnInit, Input } from '@angular/core';
import { PageLanguageService } from "../page-language.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  fr_text(num : number) {
    if (num == 1) {
      return "Bienvenue sur la page d'accueil du Destalyr Wiki"
    }
    if (num == 2) {
      return "Destalyr est un jeu de rôle sur table, comme Donjons&Dragons."
    }
    if (num == 3) {
      return "Le jeu Destalyr se déroule dans un monde médiéval fantasy où la magie est courante et les problèmes nombreux."
    }
    if (num == 4) {
      return "Destalyr est le nom du continent qui contient les 6 six races connues d'humanoïdes (appelés humains), le reste du monde est innexploré"
    }
    if (num == 5) {
      return "Le site, comme le jeu, est encore en construction."
    }
    if (num == 6) {
      return "Tout retour est apprécié à l'adresse suivante : mephysto.phelles666@gmail.com."
    }
  }

  en_text(num : number) {
    if (num == 1) {
      return "Welcome to the Destalyr Wiki home page"
    }
    if (num == 2) {
      return "Destalyr is a tabletop role playing game, like Dungeons&Dragons."
    }
    if (num == 3) {
      return "The game Destalyr takes place in a medieval fansay world where magic is common and problems are plenty."
    }
    if (num == 4) {
      return "Destalyr is the name of the continent which holds the 6 six known races of humanoides (called humans), the rest of the world remains undiscovered."
    }
    if (num == 5) {
      return "The website, like the game, is still under construction."
    }
    if (num == 6) {
      return "Any feedback is appreciated at the following email address : mephysto.phelles666@gmail.com."
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

  ngOnInit(): void {
  }

}
