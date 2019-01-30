import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { of, Subject } from 'rxjs';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        }
      }
    );

    this.testOperators();
  }


  testOperators() {
    this.testPipe();
    this.testMergeMap();
    this.testSwitchMap();
  }

  testPipe() {
    console.log('=======testPipe===========');
    const numbers$ = of(1, 2, 3, 4, 5);
    const squareOddValue$ = numbers$.pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

    squareOddValue$.subscribe( n => console.log(n));
  }

  testMergeMap() {
    console.log('=======testMergeMap===========');
    const obs1$ = of('A', 'B', 'C');
    const obs2$ = of('1', '2', '3');

    const mergeMap$ = obs1$.pipe(
      mergeMap( () => obs2$, (x, y) => '' + x + y, 4)
    );
    mergeMap$.subscribe( x => console.log(x));
  }

  testSwitchMap() {
    console.log('=======testSwitchMap===========');
    const sub1 = new Subject<string>();
    const sub2 = new Subject<string>();
    setTimeout( () => {
      sub1.next('A');
      sub2.next('1');
    }, 100);
    setTimeout( () => {
      sub2.next('2');
    }, 200);
    setTimeout( () => {
      sub2.next('3');
    }, 300);


    setTimeout( () => {
      sub1.next('B');
    }, 400);


    setTimeout( () => {
      sub1.next('C');
    }, 500);

    const obs1$ = sub1.asObservable(); // of('A', 'B', 'C');
    const obs2$ = sub2.asObservable(); // of('1', '2', '3');

    const result$ = obs1$.pipe(
      switchMap(() => obs2$, (x, y) => x + y )
    );

    result$.subscribe( x => console.log(x));
  }

}
