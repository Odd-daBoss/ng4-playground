import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Hello World!</h1>

	<button (mouseleave)="myEvent($event)">My Button</button>

  `,
})

export class AppComponent {

	myEvent(event) {
		console.log(event);
	}

}
