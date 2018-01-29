import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 

  constructor(
    private _navCtrl: NavController,
    private _navParams: NavParams,
    private _modalCtrl: ModalController,
    private _menuCtrl: MenuController
  ) {
  }

  private _logOutTap() {
    this._navCtrl.pop();
  }
  
  private _cartModalTap() {
    const cartModal = this._modalCtrl.create(CartPage);
    cartModal.present();
  }

  private _openMenu() {
    this._menuCtrl.open();
  }

}
