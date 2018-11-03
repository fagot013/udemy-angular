import { Component } from '@angular/core';

@Component({
  selector: '[success-alert]',
  template: `
    <div class="success-alert">All done</div>
  `,
  styles: [`
    div {
      padding: 20px;
      border: 1px solid red;
    }
    .success-alert {
      color: green;
    }
  `]
})
export class SuccessAlertComponent {

}
