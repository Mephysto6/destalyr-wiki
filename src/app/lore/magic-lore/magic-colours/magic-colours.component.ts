import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-colours',
  templateUrl: './magic-colours.component.html',
  styleUrls: ['./magic-colours.component.css']
})
export class MagicColoursComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
