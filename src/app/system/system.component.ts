import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../page-language.service";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

  fr_text(num : number) {
    if (num == 0) {
      return "Explication"
    }
    if (num == 1) {
      return "Armes"
    }
    if (num == 2) {
      return "Armures"
    }
    if (num == 3) {
      return "Jauges"
    }
    if (num == 4) {
      return "Attaquer"
    }
    if (num == 5) {
      return "Combat"
    }
    if (num == 6) {
      return "Magie"
    }
    if (num == 7) {
      return "Soins & Repos"
    }
    if (num == 8) {
      return "États"
    }
  }

  en_text(num : number) {
    if (num == 0) {
      return "Explanation"
    }
    if (num == 1) {
      return "Weapons"
    }
    if (num == 2) {
      return "Armors"
    }
    if (num == 3) {
      return "Gauges"
    }
    if (num == 4) {
      return "Attacking"
    }
    if (num == 5) {
      return "Combat"
    }
    if (num == 6) {
      return "Magic"
    }
    if (num == 7) {
      return "Healing & Rest"
    }
    if (num == 8) {
      return "States"
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
