import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
//import { FriendsPage } from '../friends/friends';
import { ActionSheetController } from 'ionic-angular'
import { NewgroupPage } from '../newgroup/newgroup';
import { FriendsPage } from '../friends/friends';




@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  image = [];


  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams) {
    //this.imageDisplay();
    this.image.push({
      abc: "assets/imgs/test.png",
    },

    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }
  // imageDisplay(){
  // var i;
  //for (i=1; i<5; i++){
  //this.image.push({
  //abc: "assets/imgs/test.png",
  //},);
  //}
  //}

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Isna Khan',
      buttons: [

        {
          icon: 'contacts',
          text: 'Go to channel',
          //role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          icon: 'person-add',

          text: 'Invite',
          handler: () => {
            console.log('Invite clicked');
          }
        },
        {
          icon: 'remove-circle',

          text: 'Block',
          //role: 'cancel',
          handler: () => {
            console.log('Block clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
  goto_new_group()
  {this.navCtrl.push(NewgroupPage);}

  goto_friends()
  {this.navCtrl.push(FriendsPage);}



  @ViewChild(Content) content: Content;
  showToolbar: boolean = false;
 
   toggleToolbar() {
     //this.showToolbar = !this.showToolbar;
   this.content.resize();
   }
}
