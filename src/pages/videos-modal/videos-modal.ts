import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
//import { SettingsPage } from '../settings/settings';
import {ViewController} from 'ionic-angular';
import {Injectable} from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
@IonicPage()
@Component({
  selector: 'page-videos-modal',
  templateUrl: 'videos-modal.html',
})
export class VideosModalPage {

video=[];

  constructor(private toastCtrl: ToastController,public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams)
   {

    this.video.push({
      image: "assets/imgs/test.png",
      heading: "Nine Inch Nails Live",
      description: "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
      },
      {
        image: "assets/imgs/test.png",
        heading: "Nine Inch Nails Live",
        description: "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
  
      },
      {
        image: "assets/imgs/test.png",
        heading: "Nine Inch Nails Live",
        description: "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
     
      });
      }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosModalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
 // gotoSettingsPage()
  //{this.navCtrl.push(SettingsPage);}


popover_func() {
  let toast = this.toastCtrl.create({
    message: 'User was added successfully',
    duration: 10000,
    position: 'bottom',
    showCloseButton: true,
    closeButtonText: 'okay'

  });

  toast.onDidDismiss(() => {
 
   console.log('Dismissed toast');
  });

  toast.present();
}

   
}
