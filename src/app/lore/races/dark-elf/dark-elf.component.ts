import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-dark-elf',
  templateUrl: './dark-elf.component.html',
  styleUrls: ['./dark-elf.component.css']
})
export class DarkElfComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
