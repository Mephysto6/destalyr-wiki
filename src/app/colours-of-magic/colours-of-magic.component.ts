import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../page-language.service";

@Component({
  selector: 'app-colours-of-magic',
  templateUrl: './colours-of-magic.component.html',
  styleUrls: ['./colours-of-magic.component.css']
})
export class ColoursOfMagicComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
