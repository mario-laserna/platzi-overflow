import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from './user.model';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup.component.html'
})
export class SignupScreenComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const {email, password, password2, firstName, lastName} = this.signupForm.value;
    if (this.signupForm.valid && password === password2) {
      const user = new User(email, password, firstName, lastName);
      console.log(user);
    }
  }
}
