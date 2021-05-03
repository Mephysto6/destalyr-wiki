import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-hitting',
  templateUrl: './hitting.component.html',
  styleUrls: ['./hitting.component.css']
})
export class HittingComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
 
  ngOnInit(): void {
  }

}
