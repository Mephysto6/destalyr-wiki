import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-other-rolls',
  templateUrl: './other-rolls.component.html',
  styleUrls: ['./other-rolls.component.css']
})
export class OtherRollsComponent implements OnInit {

  constructor(public langue: PageLanguageService) { }

  ngOnInit(): void {
  }

}
