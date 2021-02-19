import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent extends AppComponent implements OnInit {
  fr_text : String = "Bienvenue sur la page d'accueil du Destalyr Wiki."
  en_text : String = "Welcome to the Destalyr Wiki home page."

  show_text(language: String): String {
    if (language == "fr") {
      return this.fr_text
    }
    if (language == "en") {
      return this.en_text
    }
  }
  
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
