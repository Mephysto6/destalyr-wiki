import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../page-language.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
