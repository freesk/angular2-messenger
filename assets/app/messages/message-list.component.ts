import { Component, OnInit } from "@angular/core";

import { Message }  from "./message.model";
import { MessageService } from "./message.service";

@Component({
  selector: 'app-message-list',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <!-- Listening for a custom event "edit" -->
      <!-- $event is a reference for incoming event data -->
      <!-- *ngFor is the iterator here. The star is for structural directives -->
      <!-- Passing an argument into a component in action  -->
      <app-message [message]="message" (edit)="message.content = $event" *ngFor="let message of messages"></app-message>
    </div>
  `
})
export class MessageListComponent implements OnInit {
  // Define an array of objects of type Message
  messages: Message[];

  constructor(private messageService: MessageService) {}

  // OnInit @angular/core interface requires a method ngOnInit
  // This is for safe initialization
  ngOnInit() {
    this.messages = this.messageService.getMessage();
  }
}
