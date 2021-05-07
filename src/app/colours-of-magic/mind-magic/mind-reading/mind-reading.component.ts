import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-mind-reading',
  templateUrl: './mind-reading.component.html',
  styleUrls: ['./mind-reading.component.css']
})
export class MindReadingComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
