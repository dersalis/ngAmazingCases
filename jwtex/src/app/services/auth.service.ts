import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User;

  constructor(private angularFire: AngularFireAuth) {
    this.setAuthState();
  }


  login(email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log(value);
      this.setAuthState();
    })
    .catch(err => {
      console.log(err);
    });
  }

  signup(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log(value);
      this.setAuthState();
    })
    .catch(err => {
      console.log(err);
    });
  }

  logout() {
    console.log('Wylogowanie');
    this.angularFire.auth.signOut();
    this.user = null;
  }

  setAuthState(): void {
    this.angularFire.authState.subscribe(user => {
      console.log('AuthService - setAuthState');
      console.log(user);
      this.user = user;
    });
  }
}
