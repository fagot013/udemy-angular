import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'Advanced';
  @ViewChild('f') form: NgForm;
  formValue: any = null;
  submitted = false;

  onSubmit() {
    console.log('On submit');
    console.log(this.form);
    this.formValue = this.form.value;
    this.submitted = true;
  }
}
