import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-damages',
  templateUrl: './damages.component.html',
  styleUrls: ['./damages.component.css']
})
export class DamagesComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
 
  ngOnInit(): void {
  }

}
