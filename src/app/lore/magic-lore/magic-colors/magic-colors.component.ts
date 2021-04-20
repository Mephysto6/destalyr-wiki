import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-colors',
  templateUrl: './magic-colors.component.html',
  styleUrls: ['./magic-colors.component.css']
})
export class MagicColorsComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
