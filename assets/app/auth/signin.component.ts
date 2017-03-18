import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from './auth.service';
import { User } from "./user.model";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {

    console.log("Submit");

    const user = new User(this.myForm.value.email, this.myForm.value.password);

    this.authService.signin(user)
        .subscribe(
          data => {
            // Accessing the local storage
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            // Go to the home page
            this.router.navigateByUrl('/')
          },
          error => console.log(error)
        );
    this.myForm.reset();
  }

  // On init
  ngOnInit() {
    this.myForm = new FormGroup({
      // Setting up controls of the form
      email: new FormControl(null, [
        Validators.required,
        // Regex
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

}
