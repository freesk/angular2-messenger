import { Component } from '@angular/core';

// Decorator
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
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
// Create a TS class that holds an angular component
export class AppComponent {
  // Creating properties of the class
  message = {
    content: "I will kill them all.",
    author: "John Wick"
  }
}
