import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private af: AngularFireAuth, public router: Router) {}

    canActivate(): Observable<boolean> {
        return this.af.authState.map(val => {
            if (val == null) {
                return false;
            } else {
                return true;
            }
        });
    }
}
