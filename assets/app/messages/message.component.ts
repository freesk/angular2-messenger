import { Component, Input } from "@angular/core";

import { Message }  from "./message.model";
import { MessageService } from "./message.service";

@Component({
  // Related tag
  selector: 'app-message',
  templateUrl: './message.component.html',
  // Style for this component only
  styles: [`
    .username {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
    }
    .config {
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }
  `]
})
export class MessageComponent {
  // Creating properties of the class
  // @Input is a class from angular/core that allows passing arguments into this component from a parent component
  @Input() message: Message;
  // Make the message service accessable
  constructor(private messageService: MessageService) {}
  // Edit
  onEdit() {
    // Call one of the service's methods
    this.messageService.editMessage(this.message);
  }
  // Delete
  onDelete() {
    // Call one of the service's methods
    this.messageService.deleteMessage(this.message)
                       // Subscribe for a returned promise
                       .subscribe(
                         result => console.log(result)
                       );
  }

  belongsToUser() {
    return localStorage.getItem('userId') == this.message.userId;
  }
}
