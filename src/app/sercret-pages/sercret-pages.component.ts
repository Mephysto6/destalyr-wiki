import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-sercret-pages',
  templateUrl: './sercret-pages.component.html',
  styleUrls: ['./sercret-pages.component.css']
})
export class SercretPagesComponent implements OnInit {

  passphrase = ""
  entered = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  go_to_page() {
    this.entered = true

    if (this.passphrase == "Arbeit macht frei") {
      this.router.navigate(['/secret-pages/5Wug0Bk6'])
    }

    if (this.passphrase == "Fuck les sombres") {
      this.router.navigate(['/secret-pages/uRi8C110'])
    }

    if (this.passphrase == "Fuck les sylvains") {
      this.router.navigate(['/secret-pages/dL1226sF'])
    }

    if (this.passphrase == "meowmeowmeow") {
      this.router.navigate(['/secret-pages/97gB9txO'])
    }

    if (this.passphrase == "Yes i am hooman") {
      this.router.navigate(['/secret-pages/2REco0Q8'])
    }

    if (this.passphrase == "Flower power") {
      this.router.navigate(['/secret-pages/nZX7X17s'])
    }

    if (this.passphrase == "comment rendre un ttrpg encore plus nerdy") {
      this.router.navigate(['/secret-pages/ne12V72t'])
    }

    if (this.passphrase == "honhonhon spook") {
      this.router.navigate(['/secret-pages/3X5Ju928'])
    }

  }

}
