import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-lyune',
  templateUrl: './lyune.component.html',
  styleUrls: ['./lyune.component.css']
})
export class LyuneComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
