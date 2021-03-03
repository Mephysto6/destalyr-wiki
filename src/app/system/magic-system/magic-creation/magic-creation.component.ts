import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-creation',
  templateUrl: './magic-creation.component.html',
  styleUrls: ['./magic-creation.component.css']
})
export class MagicCreationComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
