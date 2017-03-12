import { Component } from "@angular/core";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent {

  constructor(private messageService: MessageService) {}

  // Incoming value of type String
  onSave(value: String) {
    // console.log(value);
    const message = new Message(value, "John");
    this.messageService.addMessage(message);
  }
}
