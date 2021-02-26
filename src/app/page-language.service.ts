import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLanguageService {
  l : string = "fr";

  change_lang(language : string) {
    this.l = language;
  }

}
