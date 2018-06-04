import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  showSkipButton: boolean = true;

  constructor(
    public navCtrl: NavController
  ) {}

  onSlideChanged(event) {
    console.log(event.isEnd)
    this.showSkipButton = !event.isEnd;
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
