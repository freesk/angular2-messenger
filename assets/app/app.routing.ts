import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const appRoutes: Routes = [
  {
    // Root path setup
    path: '',
    redirectTo: '/messages',
    pathMatch: 'full'
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
    // Implementation of nested routes
    // It's loaded only when needed
    loadChildren: './auth/auth.module#AuthModule'
  }
];

// Register all routes and export it
export const routing = RouterModule.forRoot(appRoutes);
