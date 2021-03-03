import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-the-elven-time',
  templateUrl: './the-elven-time.component.html',
  styleUrls: ['./the-elven-time.component.css']
})
export class TheElvenTimeComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
