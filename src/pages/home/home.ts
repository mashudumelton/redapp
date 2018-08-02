import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
info;
infoList;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataProvider) {

    this.data.getRemoteData().subscribe(data=>{
    
    this.info = data;
    console.log(this.info);
    this.infoList=this.info.data.children;
    
  })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}

