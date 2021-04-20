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

  constructor(public langue: PageLanguageService) {
    
  }
}
