import { Component } from "@angular/core";

import { Message }  from "./message.model";

@Component({
  selector: 'app-message-list',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <!-- Listening for a custom event "editClicked" -->
      <!-- $event is a reference for incoming event data -->
      <!-- *ngFor is the iterator here. The star is for structural directives -->
      <!-- Passing an argument into a component in action  -->
      <app-message [message]="message"
                   (editClicked)="message.content = $event"
                   *ngFor="let message of messages">
      </app-message>
    </div>
  `
})
export class MessageListComponent {
  // Define an array of objects of type Message
  messages: Message[] = [
    new Message("I will kill them all.", "John Wick"),
    new Message("All of them.", "John Wick")
  ];
}
