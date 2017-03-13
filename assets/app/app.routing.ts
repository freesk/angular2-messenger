import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
// Import routes for auth section
import { authRoutes } from "./auth/auth.routes";

const appRoutes: Routes = [
  {
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
    children: authRoutes
  }
];

// Register the routes and export it
export const routing = RouterModule.forRoot(appRoutes);
