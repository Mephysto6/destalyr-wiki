import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-manipulation',
  templateUrl: './magic-manipulation.component.html',
  styleUrls: ['./magic-manipulation.component.css']
})
export class MagicManipulationComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
