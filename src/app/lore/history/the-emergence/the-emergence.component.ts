import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-the-emergence',
  templateUrl: './the-emergence.component.html',
  styleUrls: ['./the-emergence.component.css']
})
export class TheEmergenceComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
