import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation, LaunchNavigator } from 'ionic-native';

import { Places } from '../../providers/places';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  public place = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public placesService: Places
  ) {}

  ionViewDidEnter() {
    this.placesService.findById(this.navParams.get('id')).then((place) => {
      this.place = place;
    })
  }

  getDirections(place) {
    Geolocation.getCurrentPosition({timeout: 10000, enableHighAccuracy: true}).then((data) => {
      LaunchNavigator.navigate(
        [place.coords.latitude, place.coords.longitude],
        [data.coords.latitude, data.coords.longitude])
        .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
    })
  }

}
