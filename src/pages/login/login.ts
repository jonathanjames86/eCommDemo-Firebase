import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private _email: string;
  private _password: string;

  constructor(private _navCtrl: NavController) {

  }

  private _loginTap() {
    this._navCtrl.push(HomePage);
  }


}
