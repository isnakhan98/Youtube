import { Component } from '@angular/core';
import { Injectable } from '@angular/core'
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
//import { ModalPage } from '../modal/modal';
import { VideosModalPage } from '../videos-modal/videos-modal';

@Injectable()
@IonicPage()
@Component({
  selector: 'page-trending',
  templateUrl: 'trending.html',
})
export class TrendingPage {

  videos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    this.videos.push({
      image: "assets/imgs/test.png",
      title: "Nine Inch Nails Live",
      description: "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
      likes: 12,
      comments: 4,
      time: "11h ago"
    },
      {
        image: "assets/imgs/test.png",
        title: "Nine Inch Nails Live",
        description: "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
        likes: 12,
        comments: 4,
        time: "11h ago"
      },
      {
        image: "assets/imgs/test.png",
        title: "Nine Inch Nails Live",
        description: "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
        likes: 12,
        comments: 4,
        time: "11h ago"
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrendingPage');
  }

  openDetailScreen() {
    let myModal = this.modalCtrl.create(VideosModalPage);
    myModal.present();
  }

 }
