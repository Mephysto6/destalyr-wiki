import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-magic-concentration',
  templateUrl: './magic-concentration.component.html',
  styleUrls: ['./magic-concentration.component.css']
})
export class MagicConcentrationComponent implements OnInit {
  
  show1 = false
  show2 = false
  show3 = false
  show4 = false

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

  show_text_1() {
    this.show1 = !this.show1
  }
  show_text_2() {
    this.show2 = !this.show2
  }
  show_text_3() {
    this.show3 = !this.show3
  }
  show_text_4() {
    this.show4 = !this.show4
  }
  
}
