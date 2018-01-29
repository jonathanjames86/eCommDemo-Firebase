import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import firebase from "firebase";

@Injectable()
export class AuthProvider {

  constructor(
    private _http: HttpClient, 
    private _afAuth: AngularFireAuth
  ) {}

  public loginWithEmail(email: string, password: string) {
    return this._afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public signUpUser(email: string, password: string) {
    return this._afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

}
