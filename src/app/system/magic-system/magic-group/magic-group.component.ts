import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-group',
  templateUrl: './magic-group.component.html',
  styleUrls: ['./magic-group.component.css']
})
export class MagicGroupComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
