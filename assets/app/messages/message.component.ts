import { Component } from "@angular/core";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  // Style for this component only
  styles: [`
    .author {
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
  message = {
    content: "I will kill them all.",
    author: "John Wick"
  }
}
