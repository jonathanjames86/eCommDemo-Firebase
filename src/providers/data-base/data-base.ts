import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from "firebase";


@Injectable()
export class DataBaseProvider {
private _fb: any; 
private _itemsRef: any;
  constructor(public http: HttpClient) {
    this._fb = firebase.database();
    this._itemsRef = this._fb.ref("_items");

  }

  public loadItems(itemType: string) : Promise<any> {
   return new Promise<any>((resolve) => {
    this._itemsRef.child(itemType).child("brands").once("value").then(snapshot => {
      console.log(snapshot.val());
      let brands = [];
      const brand = snapshot.val();

      for (const item in brand) {
        if (brand.hasOwnProperty(item)) {
          const innerObj = {};
          innerObj[item] = brand[item];
          brands.push(innerObj);
        }
      }
      resolve(brands);
    })
   });
  }
}
