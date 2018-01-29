import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private _email: string;
  private _password: string;

  constructor(
    private _navCtrl: NavController,
    private _authProvider: AuthProvider
  ) {

  }

  private _loginTap() {
    this._authProvider.loginWithEmail(this._email, this._password).then((fbUser) => {
      console.log('fbUser', fbUser);
      this._navCtrl.push(HomePage);
    }, (error) => {
      // if(error.code === "auth/user-not-found") {
      //   this._authProvider.signUpUser(this._email, this._password).then(() => {
      //     console.log('user created');
      //     this._navCtrl.push(HomePage);
      //   })
      // }
      console.log(error);
    })
  }

}
