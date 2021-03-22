import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-system-explanation',
  templateUrl: './magic-system-explanation.component.html',
  styleUrls: ['./magic-system-explanation.component.css']
})
export class MagicSystemExplanationComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
