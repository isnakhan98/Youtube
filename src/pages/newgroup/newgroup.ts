import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-newgroup',
  templateUrl: 'newgroup.html',
})
export class NewgroupPage {

   @ViewChild(Content) content: Content;
 showToolbar: boolean = false;

  toggleToolbar() {
    this.showToolbar = !this.showToolbar;
  this.content.resize();
  }
 //scrollToTop() {
  //this.content.scrollToTop();
//}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewgroupPage');
  }

}
