import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../page-language.service";

@Component({
  selector: 'app-compendium',
  templateUrl: './compendium.component.html',
  styleUrls: ['./compendium.component.css']
})
export class CompendiumComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  searching : string =  "poop"

  ngOnInit(): void {
  }

  change_kw(keyword: string) {
    this.searching = keyword
  }
}
