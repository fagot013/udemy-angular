import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { TRY_SIGNUP } from './auth.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  // @Effect()
  // authSignup = this.actions$
  //   .pipe(
  //     ofType(TRY_SIGNUP),
  //     map()
  //   );

  constructor( private actions$: Actions) {}


}
