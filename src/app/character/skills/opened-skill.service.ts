import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenedSkillService {
  name = ""

  constructor() { }

  click_skill(new_skill: string) {
    if (this.name == new_skill) {
      this.name = "" ;
    }
    else {
      this.name = new_skill;
    }
  }
  
}
