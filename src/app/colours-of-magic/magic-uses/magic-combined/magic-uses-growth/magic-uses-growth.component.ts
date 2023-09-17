import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../../page-language.service";

@Component({
  selector: 'app-magic-uses-growth',
  templateUrl: './magic-uses-growth.component.html',
  styleUrls: ['./magic-uses-growth.component.css']
})
export class MagicUsesGrowthComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
