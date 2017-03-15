import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
  message: Message;

  constructor(private messageService: MessageService) {}

  // Incoming value of type String
  onSubmit(form: NgForm) {
    if (this.message) {
      // Edit
      this.message.content = form.value.content;
      this.messageService.updateMessage(this.message)
                         .subscribe(
                           result => console.log(result)
                         );
      this.message = null;
    } else {
      // Creating
      const message = new Message(form.value.content, "John");
      this.messageService.addMessage(message)
          // Send the request
          .subscribe(
            data => console.log(data),
            error => console.error(error)
          );
    }
    // Angular's method
    form.resetForm();
  }

  onClear(form: NgForm) {
    // Clear
    this.message = null;
    form.resetForm();
  }

  ngOnInit() {
    // Listen for events
    this.messageService.messageIsEdit.subscribe(
      (message: Message) => this.message = message
    );
  }
}
