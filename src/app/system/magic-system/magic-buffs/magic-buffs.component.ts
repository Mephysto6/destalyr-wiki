import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-buffs',
  templateUrl: './magic-buffs.component.html',
  styleUrls: ['./magic-buffs.component.css']
})
export class MagicBuffsComponent implements OnInit {

  constructor(public langue: PageLanguageService) { }

  ngOnInit(): void {
  }

}
