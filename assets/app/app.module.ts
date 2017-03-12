import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// To make [(ngModel)]="message.content" work
import { FormsModule }  from "@angular/forms";

import { AppComponent } from "./app.component";
import { MessageComponent }  from "./messages/message.component";
import { MessageListComponent }  from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";

// Decorator attaches additional info to a TS class
@NgModule({
    // Define all component in use
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
// Class
export class AppModule {

}
