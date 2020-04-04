import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import {HelpPage } from '../help/help';



@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  close() {
    this.viewCtrl.dismiss("settings");
  }

  open_settings()
  {
    this.navCtrl.push(SettingsPage);
  }
  
  open_help()
  {
    this.navCtrl.push(HelpPage);

  }
}
