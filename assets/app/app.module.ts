import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// To make [(ngModel)]="message.content" work
import { FormsModule }  from "@angular/forms";

import { AppComponent } from "./app.component";
import { MessageComponent }  from "./messages/message.component";

// Decorator attaches additional info to a TS class
@NgModule({
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
// Class
export class AppModule {

}
