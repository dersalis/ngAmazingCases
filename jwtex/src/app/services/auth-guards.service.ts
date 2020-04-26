import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {

  private user: User;

  constructor(private angularFire: AngularFireAuth) {
    console.log('AuthGuardsService - constructor');
    this.getAuthState();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuardsService - canActivate');
    // this.getAuthState();
    if (this.user != null) {
      console.log('User istnieje');
      return true;
    }
    console.log('User nie istnieje');
    return false;
  }

  getAuthState(): void {
    this.angularFire.authState.subscribe(user => {
      console.log('AuthGuardsService - getAuthState');
      console.log(user);
      this.user = user;
    },
    err => {
      console.log(err);
    });
  }

}
