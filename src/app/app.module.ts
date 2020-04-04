import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Modal } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TrendingPage } from '../pages/trending/trending';
import { LibraryPage } from '../pages/library/library';
import { SubscriptionPage } from '../pages/subscription/subscription';
import { InboxPage } from '../pages/inbox/inbox';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { VideoPage } from '../pages/video/video';
import { AccountPage } from '../pages/account/account';
import { ModalPage } from '../pages/modal/modal';
import { SettingsPage } from '../pages/settings/settings';
import { VideosModalPage } from '../pages/videos-modal/videos-modal';
import { VideoPlayer } from '@ionic-native/video-player';
import { HelpPage } from '../pages/help/help';
import { PopoverPage } from '../pages/popover/popover';
import { GeneralPage } from '../pages/general/general';
import { NewgroupPage } from '../pages/newgroup/newgroup';
import { FriendsPage } from '../pages/friends/friends';



@NgModule({
  declarations: [
    MyApp,
    TrendingPage,
    LibraryPage,
    SubscriptionPage,
    InboxPage,
    TabsPage,
    SearchPage,
    VideoPage,
    AccountPage,
    ModalPage,
    SettingsPage,
    VideosModalPage,
    HelpPage,
    PopoverPage,
    GeneralPage,
    NewgroupPage,
    FriendsPage
  ],

    imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrendingPage,
    LibraryPage,
    SubscriptionPage,
    InboxPage,
    TabsPage,
    SearchPage,
    VideoPage,
    AccountPage,
    ModalPage,
    SettingsPage,
    VideosModalPage,
    HelpPage,
    PopoverPage,
    GeneralPage,
    NewgroupPage,
    FriendsPage
    ],
  
  providers: [
    StatusBar,
    VideoPlayer,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
