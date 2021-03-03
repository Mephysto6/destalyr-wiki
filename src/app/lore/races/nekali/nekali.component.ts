import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-nekali',
  templateUrl: './nekali.component.html',
  styleUrls: ['./nekali.component.css']
})
export class NekaliComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
