import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <content></content>
  `,
})
export class AppComponent  { name = 'Seed'; }
