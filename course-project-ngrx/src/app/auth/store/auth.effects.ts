import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { SET_TOKEN, SIGN_IN, SIGN_UP, SignIn, TRY_SIGNIN, TRY_SIGNUP, TrySingup, TrySingin, LOGOUT } from './auth.actions';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect({dispatch: false})
  logout = this.actions$.pipe(
    ofType(LOGOUT)
  ).pipe(tap( () => {
     this.router.navigate(['/']);
  }));

  @Effect()
  autSignIn = this.actions$
    .pipe(
      ofType(TRY_SIGNIN),
      map( (action: TrySingin) => {
        return action.payload;
      }),
      switchMap( (authData: {username: string, password: string}) => {
        return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
      }),
      switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
      }),
      mergeMap( (token: string) => {
        this.router.navigate(['/']);
        return [
          {
            type: SIGN_IN
        },
        {
          type: SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  @Effect()
  authSignup = this.actions$
    .pipe(
      ofType(TRY_SIGNUP),
      map( (action: TrySingup) => {
        return action.payload;
      }),
      switchMap( (authData: {username: string, password: string}) => {
        return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
      }),
      switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
      }),
      mergeMap( (token: string) => {
        this.router.navigate(['/']);
        return[
          {
            type: SIGN_UP
          },
          {
            type: SET_TOKEN,
            payload: token
          }
        ];
      })
    );

  constructor( private actions$: Actions,
               private router: Router) {}


}
