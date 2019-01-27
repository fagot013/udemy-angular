import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../store/app.reducers';
import { Logout, SetToken, SignIn, SignUp } from './store/auth.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthService {

  constructor(private router: Router,
              private store: Store<AppState>) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( user => {
        this.store.dispatch(new SignUp());
        firebase.auth().currentUser.getIdToken()
          .then( (tk: string) => {
            this.store.dispatch(new SetToken(tk));
          });
      })

      .catch( (error) => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          console.log(response);
          this.store.dispatch(new SignIn());
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then( (tk: string) => {
              this.store.dispatch(new SetToken(tk));
            });
        }
      )
      .catch((error) => {
      console.log(error);
    });
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new Logout());
  }

}
