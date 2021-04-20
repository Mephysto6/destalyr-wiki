import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-purification-magic',
  templateUrl: './purification-magic.component.html',
  styleUrls: ['./purification-magic.component.css']
})
export class PurificationMagicComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
