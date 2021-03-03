import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-the-elven-war',
  templateUrl: './the-elven-war.component.html',
  styleUrls: ['./the-elven-war.component.css']
})
export class TheElvenWarComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
