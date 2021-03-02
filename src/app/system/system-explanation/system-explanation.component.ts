import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-system-explanation',
  templateUrl: './system-explanation.component.html',
  styleUrls: ['./system-explanation.component.css']
})
export class SystemExplanationComponent implements OnInit {

  constructor(public langue: PageLanguageService) {}
  
  ngOnInit(): void {}

}
