import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { HelpPage } from '../help/help';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'

})
export class AccountPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  goTosettingsPage() { this.navCtrl.push(SettingsPage); }


  open_Modal_help() {
    let myModal = this.modalCtrl.create(HelpPage);
    myModal.present();
  }


}
