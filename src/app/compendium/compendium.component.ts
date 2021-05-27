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

  keyword : string

  ngOnInit(): void {
  }

  change_kw(new_keyword: string) {
    this.keyword = new_keyword
  }

  search_kw_in(keywords:string) {
    for (let i=0; i < keywords.length; i++) {
      if (this.keyword == keywords[i]) {
        return true;
      }
    }
    return false
  }
}
