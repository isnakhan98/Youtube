import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TrendingPage } from '../trending/trending';
import { SubscriptionPage } from '../subscription/subscription';
import { InboxPage } from '../inbox/inbox';
import { LibraryPage } from '../library/library';
import { SearchPage } from '../search/search';
import { VideoPage } from '../video/video';
import { AccountPage } from '../account/account';
//import { ModalPage } from '../modal/modal';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
 })
 
export class TabsPage {
  account: Account[];

  trendingPage;
  subscriptionPage; 
  libraryPage;
  inboxPage;
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { 

    this.trendingPage = TrendingPage;
    this.subscriptionPage = SubscriptionPage;
    this.libraryPage = LibraryPage;
    this.inboxPage = InboxPage;
  }

  goTovideoPage() { this.navCtrl.push(VideoPage); }

  goTosearchPage() { this.navCtrl.push(SearchPage); }

  goto_inbox() {
    this.navCtrl.push(InboxPage);
  }

  openModal() {
    let myModal = this.modalCtrl.create(AccountPage);
    myModal.present();
  }
}
