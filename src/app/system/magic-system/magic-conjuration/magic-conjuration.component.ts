import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-conjuration',
  templateUrl: './magic-conjuration.component.html',
  styleUrls: ['./magic-conjuration.component.css']
})
export class MagicConjurationComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
