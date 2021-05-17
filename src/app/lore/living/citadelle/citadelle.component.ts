import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-citadelle',
  templateUrl: './citadelle.component.html',
  styleUrls: ['./citadelle.component.css']
})
export class CitadelleComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }

  ngOnInit(): void {
  }

}
