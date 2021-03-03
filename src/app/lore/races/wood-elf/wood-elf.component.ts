import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-wood-elf',
  templateUrl: './wood-elf.component.html',
  styleUrls: ['./wood-elf.component.css']
})
export class WoodElfComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  
  ngOnInit(): void {
  }

}
