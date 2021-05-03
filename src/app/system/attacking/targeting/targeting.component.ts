import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-targeting',
  templateUrl: './targeting.component.html',
  styleUrls: ['./targeting.component.css']
})
export class TargetingComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
 
  ngOnInit(): void {
  }

}
