import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Hello World!</h1>

	<button [disabled]="buttonStatus">My Button</button>

  `,
})

export class AppComponent {

	buttonStatus = false;

}
