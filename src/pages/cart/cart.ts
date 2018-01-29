import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(private _viewCtrl: ViewController) {
  }

  _cartPageClose() {
    this._viewCtrl.dismiss();
  }

}
