import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

// Setting up nested routes and export
export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'signup'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];
