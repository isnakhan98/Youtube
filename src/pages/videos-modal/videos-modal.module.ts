import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosModalPage } from './videos-modal';
import {AccountPage}from '../account/account';


@NgModule({
  declarations: [
    VideosModalPage,AccountPage
  ],
  imports: [
    IonicPageModule.forChild(VideosModalPage),
  ],
})
export class VideosModalPageModule {}
