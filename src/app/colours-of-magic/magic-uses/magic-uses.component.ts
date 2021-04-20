import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-magic-uses',
  templateUrl: './magic-uses.component.html',
  styleUrls: ['./magic-uses.component.css']
})
export class MagicUsesComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
