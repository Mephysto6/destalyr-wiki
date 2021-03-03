import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-ballparks',
  templateUrl: './magic-ballparks.component.html',
  styleUrls: ['./magic-ballparks.component.css']
})
export class MagicBallparksComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
