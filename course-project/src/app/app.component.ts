import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  selectedMenu: string;

  onMenuSelected(selectedMenu: string) {
    console.log('here:' + selectedMenu);
    this.selectedMenu = selectedMenu;
  }
}
