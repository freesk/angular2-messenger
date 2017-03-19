import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AuthenticationComponent }  from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
// An example of importing a variable
import { routing } from "./app.routing" ;

import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { MessageModule } from "./messages/message.module";

// Decorator attaches additional info to a TS class
@NgModule({
  // Define all component in use
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    ErrorComponent
  ],
  // "ReactiveFormsModule" for a form at the signup route
  // "HttpModule" for ajax calls
  imports: [
    BrowserModule,
    routing,

    HttpModule,
    MessageModule
  ],
  providers: [
    AuthService,
    ErrorService
  ],
  bootstrap: [
    AppComponent
  ]
})
// Class
export class AppModule {}
