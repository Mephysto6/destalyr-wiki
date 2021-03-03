import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-flyhn',
  templateUrl: './flyhn.component.html',
  styleUrls: ['./flyhn.component.css']
})
export class FlyhnComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
