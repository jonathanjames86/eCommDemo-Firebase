import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { CartPage } from '../cart/cart';
import { DataBaseProvider } from '../../providers/data-base/data-base';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 
public _brands: any[];
public _title: string;

  constructor(
    private _navCtrl: NavController,
    private _navParams: NavParams,
    private _modalCtrl: ModalController,
    private _menuCtrl: MenuController,
    private _dbProvider: DataBaseProvider
  ) {
  }

   private _getHats() {
    this._dbProvider.loadItems("hats").then(brands => {
      this._title = "HATS";
      console.log('brands', brands);
      this._brands = [];

      brands.forEach(brand => {
        this._brands.push(Object.keys(brand));
      })
    });
  }

  private _getShoes() {
    this._dbProvider.loadItems("shoes").then(brands => {
      this._title = "SHOES";
      console.log('brands', brands);
      this._brands = [];

      brands.forEach(brand => {
        this._brands.push(Object.keys(brand));
      })
    });
  }
  
  private _cartModalTap() {
    const cartModal = this._modalCtrl.create(CartPage);
    cartModal.present();
  }

  private _openMenu() {
    this._menuCtrl.open();
  }

}
