import { Component, OnInit } from '@angular/core';
// noinspection TsLint
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
// import 'rxjs/Rx';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers: Observable<number> = interval(1000);
    // myNumbers.subscribe(
    //   (num: number) => {
    //     console.log(num);
    //   }
    // );
    const myObservable: Observable<string> = Observable.create( (observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
        observer.error(' this does not work');
      }, 5000);
      setTimeout(() => {
        observer.next('first package');
      }, 6000);
    });

    myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
}
