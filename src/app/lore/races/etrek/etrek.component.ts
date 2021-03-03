import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-etrek',
  templateUrl: './etrek.component.html',
  styleUrls: ['./etrek.component.css']
})
export class EtrekComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
