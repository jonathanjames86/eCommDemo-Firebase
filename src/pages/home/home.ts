import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private _navCtrl: NavController,
    private _navParams: NavParams,
    private _menuCtrl: MenuController
  ) {
  }

  private _logOutTap() {
    this._navCtrl.pop();
  }

  private _openMenu() {
    this._menuCtrl.open();
  }

}
