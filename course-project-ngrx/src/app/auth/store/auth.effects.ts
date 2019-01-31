import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { SET_TOKEN, SIGN_UP, TRY_SIGNUP, TrySingup } from './auth.actions';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { from } from 'rxjs';

@Injectable()
export class AuthEffects {
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

  constructor( private actions$: Actions) {}


}
