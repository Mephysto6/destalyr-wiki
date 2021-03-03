import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-elemental',
  templateUrl: './magic-elemental.component.html',
  styleUrls: ['./magic-elemental.component.css']
})
export class MagicElementalComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
