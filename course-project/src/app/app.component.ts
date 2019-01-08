import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'course-project';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAooLvB36dsKQC97Cc712_kXJ3Bl-7R2vQ',
      authDomain: 'ng-recipe-book-35bc7.firebaseapp.com',
    });
  }

}
