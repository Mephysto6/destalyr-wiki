import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

  fr_text(num : number) {
    if (num == 1) {
      return "Elf Sylvain"
    }
    if (num == 2) {
      return "Elf Sombre"
    }
  }

  en_text(num : number) {
    if (num == 1) {
      return "Wood Elf"
    }
    if (num == 2) {
      return "Dark Elf"
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
