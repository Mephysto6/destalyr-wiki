import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

  fr_text(num : number) {
    if (num == 1) {
      return "Le Temps Elfique"
    }
    if (num == 2) {
      return "La Guerre des Elfs"
    }
    if (num == 3) {
      return "L'Emergence"
    }
    if (num == 4) {
      return "La Guerre Civile Lyune"
    }
    if (num == 5) {
      return "La Stabilisation des Elfs Sombres"
    }
    if (num == 6) {
      return "La Nouvelle Guerre"
    }
  }

  en_text(num : number) {
    if (num == 1) {
      return "The Elven Time"
    }
    if (num == 2) {
      return "The Elven War"
    }
    if (num == 3) {
      return "The Emergence"
    }
    if (num == 4) {
      return "The Lyune Civil War"
    }
    if (num == 5) {
      return "The Dark Elven Stabilisation"
    }
    if (num == 6) {
      return "The New War"
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
