import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-mind-boosting',
  templateUrl: './mind-boosting.component.html',
  styleUrls: ['./mind-boosting.component.css']
})
export class MindBoostingComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
