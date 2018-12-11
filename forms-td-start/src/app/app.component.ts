import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQuestion = 'pet';
  answer = '';

  @ViewChild('f') signUpForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted! ');
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
