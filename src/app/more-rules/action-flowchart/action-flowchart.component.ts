import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-action-flowchart',
  templateUrl: './action-flowchart.component.html',
  styleUrls: ['./action-flowchart.component.css']
})
export class ActionFlowchartComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
