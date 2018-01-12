import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public af: AngularFireAuth) {
      this.user = this.af.authState;
  }

  loginWithGoogle(): Promise<any> {
    return this.af.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedin(): boolean {
    return this.user ? true : false;
  }

  logout(): void {
    this.af.auth.signOut();
  }
}
