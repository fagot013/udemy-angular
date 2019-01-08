import * as firebase from 'firebase';

export class AuthService {
  token = '';

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch( (error) => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          console.log(response);
          firebase.auth().currentUser.getIdToken()
            .then( (tk: string) => this.token = tk);
        }
      )
      .catch((error) => {
      console.log(error);
    });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then( (tk: string) => this.token = tk);
    return this.token;
  }
}
