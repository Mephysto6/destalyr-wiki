import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-mind-magic',
  templateUrl: './mind-magic.component.html',
  styleUrls: ['./mind-magic.component.css']
})
export class MindMagicComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
