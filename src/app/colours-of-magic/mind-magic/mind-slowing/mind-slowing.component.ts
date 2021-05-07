import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-mind-slowing',
  templateUrl: './mind-slowing.component.html',
  styleUrls: ['./mind-slowing.component.css']
})
export class MindSlowingComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
