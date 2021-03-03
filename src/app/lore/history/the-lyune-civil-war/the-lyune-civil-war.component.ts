import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-the-lyune-civil-war',
  templateUrl: './the-lyune-civil-war.component.html',
  styleUrls: ['./the-lyune-civil-war.component.css']
})
export class TheLyuneCivilWarComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
