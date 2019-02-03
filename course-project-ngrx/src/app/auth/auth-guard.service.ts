import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppState } from '../store/app.reducers';
import { Store } from '@ngrx/store';
import { State } from './store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select('auth')
      .take(1)
      .map( (authState: State) => {
      return authState.authenticated;
    });
  }

}
