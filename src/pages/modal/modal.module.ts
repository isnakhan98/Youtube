import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';
import { AccountPage } from '../account/account';

@NgModule({
  declarations: [
    ModalPage,AccountPage
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
  ],
})
export class ModalPageModule {}
