import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Storage } from '@ionic/storage';

import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(
    platform: Platform,
    storage: Storage
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      storage.ready().then(() => {
        storage.get('introShown').then((result) => {
          if(result) {
            this.rootPage = HomePage;
          } else {
            storage.set('introShown', true);
            this.rootPage = IntroPage;
          }

          Splashscreen.hide();
        });
      });
    });
  }
}
