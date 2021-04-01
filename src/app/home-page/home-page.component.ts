import { Component, OnInit, Input } from '@angular/core';
import { PageLanguageService } from "../page-language.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  showtext = false
  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

  show_the_text() {
    this.showtext = !this.showtext
  }
}
