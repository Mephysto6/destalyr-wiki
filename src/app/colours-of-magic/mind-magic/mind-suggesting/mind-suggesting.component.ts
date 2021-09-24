import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-mind-suggesting',
  templateUrl: './mind-suggesting.component.html',
  styleUrls: ['./mind-suggesting.component.css']
})
export class MindSuggestingComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}