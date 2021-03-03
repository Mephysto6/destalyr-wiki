import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../page-language.service";

@Component({
  selector: 'app-attacking',
  templateUrl: './attacking.component.html',
  styleUrls: ['./attacking.component.css']
})
export class AttackingComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
