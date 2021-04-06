import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../page-language.service";

@Component({
  selector: 'app-more-rules',
  templateUrl: './more-rules.component.html',
  styleUrls: ['./more-rules.component.css']
})
export class MoreRulesComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
