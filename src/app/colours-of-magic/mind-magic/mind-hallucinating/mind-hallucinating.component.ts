import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-mind-hallucinating',
  templateUrl: './mind-hallucinating.component.html',
  styleUrls: ['./mind-hallucinating.component.css']
})
export class MindHallucinatingComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
