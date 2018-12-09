import { Component, OnDestroy, OnInit } from '@angular/core';
// noinspection TsLint
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
// import 'rxjs/Rx';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const myNumbers: Observable<number> = interval(1000);
    this.numberObsSubscription = myNumbers.subscribe(
      (num: number) => {
        console.log(num);
      }
    );
    const myObservable: Observable<string> = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error(' this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('first package');
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
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

  ngOnDestroy(): void {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
