import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-the-new-war',
  templateUrl: './the-new-war.component.html',
  styleUrls: ['./the-new-war.component.css']
})
export class TheNewWarComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
