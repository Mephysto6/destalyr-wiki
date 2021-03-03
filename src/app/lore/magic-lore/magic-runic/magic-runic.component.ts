import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-runic',
  templateUrl: './magic-runic.component.html',
  styleUrls: ['./magic-runic.component.css']
})
export class MagicRunicComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
