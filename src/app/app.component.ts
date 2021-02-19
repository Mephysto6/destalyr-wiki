import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language: String ; /* = "en" */
  title = 'Destalyr Wiki';
  
  switch_lang(new_language:String) {
    this.language = new_language
  }
  show_lang() {
    return this.language
  }
}
