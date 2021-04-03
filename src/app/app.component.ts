import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'cyber-doggo';

  plainText: string;
  base64: string;

  encode(plainText: string) {
    this.plainText = plainText;
    this.base64 = btoa(plainText);
  }

  decode(base64: string) {
    this.base64 = base64;
    this.plainText = atob(base64);
  }
}
