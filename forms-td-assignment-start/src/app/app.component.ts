import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = this.subscriptions[1];
  @ViewChild('f') form: NgForm;
  formValue: any = null;
  submitted = false;

  onSubmit() {
    console.log('On submit');
    console.log(this.form.value);
    this.formValue = this.form.value;
    this.submitted = true;
  }
}
