import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VideoPlayer,VideoOptions} from'@ionic-native/video-player';

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
 
videoOptions:VideoOptions;
videoUrl:string;


  constructor(public navCtrl: NavController,private videoPlayer:VideoPlayer, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

  async playVideo()
  {
    try{
this.videoOptions={
  volume:0.7
}
this.videoUrl="http://techslides.com/demos/sample-videos/small.mp4"
this.videoPlayer.play(this.videoUrl,this.videoOptions)

    }
    catch(e)
    {console.error(e);

    }
  }
}
