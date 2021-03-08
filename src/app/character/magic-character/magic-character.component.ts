import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-magic-character',
  templateUrl: './magic-character.component.html',
  styleUrls: ['./magic-character.component.css']
})
export class MagicCharacterComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
