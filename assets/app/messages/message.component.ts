import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Message }  from "./message.model";

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
  // @Input is a class from angular/core that allows emitting events to a parent's component
  // EventEmitter is a class from angular/core which makes us able to create custom events
  @Output() edit = new EventEmitter<String>();
  // Emit a custom event
  onEdit() {
    this.edit.emit("New value");
  }
}
