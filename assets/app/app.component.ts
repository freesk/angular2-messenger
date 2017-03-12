import { Component } from '@angular/core';

import { MessageService }  from "./messages/message.service";

// Decorator
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // Instances to pass into the each component's child components
  providers: [
    MessageService
  ]
})
// Create a TS class that holds an angular component
export class AppComponent {

}
