import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-magic-lore',
  templateUrl: './magic-lore.component.html',
  styleUrls: ['./magic-lore.component.css']
})
export class MagicLoreComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }
  
}
