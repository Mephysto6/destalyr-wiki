import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-fauna-flora',
  templateUrl: './fauna-flora.component.html',
  styleUrls: ['./fauna-flora.component.css']
})
export class FaunaFloraComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
