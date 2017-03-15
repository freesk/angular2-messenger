import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// To make [(ngModel)]="message.content" work
import { FormsModule, ReactiveFormsModule }  from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MessageComponent }  from "./messages/message.component";
import { MessageListComponent }  from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent }  from "./messages/messages.component";
import { AuthenticationComponent }  from "./auth/authentication.component";
import { HeaderComponent } from "./header.component.ts";
// An example of importing a variable
import { routing } from "./app.routing" ;
import { LogoutComponent } from "./auth/logout.component.ts";
import { SignupComponent } from "./auth/signup.component.ts";
import { SigninComponent } from "./auth/signin.component.ts";
import { AuthService } from "./auth/auth.service";

// Decorator attaches additional info to a TS class
@NgModule({
  // Define all component in use
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent,
    AuthenticationComponent,
    HeaderComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent
  ],
  // "ReactiveFormsModule" for a form at the signup route
  // "HttpModule" for ajax calls
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
// Class
export class AppModule {

}
