import { Component } from '@angular/core';

import { Message }  from "./messages/message.model";

// Decorator
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
// Create a TS class that holds an angular component
export class AppComponent {
  message: Message = new Message("I will kill them all.", "John Wick");
}
