import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-the-dark-elves-stabilisation',
  templateUrl: './the-dark-elves-stabilisation.component.html',
  styleUrls: ['./the-dark-elves-stabilisation.component.css']
})
export class TheDarkElvesStabilisationComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
