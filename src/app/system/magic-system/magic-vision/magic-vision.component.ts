import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-vision',
  templateUrl: './magic-vision.component.html',
  styleUrls: ['./magic-vision.component.css']
})
export class MagicVisionComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
