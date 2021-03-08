import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-magic-system',
  templateUrl: './magic-system.component.html',
  styleUrls: ['./magic-system.component.css']
})
export class MagicSystemComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }
  
}
