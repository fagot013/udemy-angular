import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = true;
  clicks = [];

  onDisplayClick() {
    this.clicks.push(new Date());
    this.display = !this.display;
  }

}
