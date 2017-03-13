import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  onSubmit() {
    console.log(this.myForm);
  }

  // On init
  ngOnInit() {

    this.myForm = new FormGroup({
      // Setting up controls of the form
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        // Regex
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

}
