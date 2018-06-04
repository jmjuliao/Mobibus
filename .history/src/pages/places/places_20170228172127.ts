import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation } from 'ionic-native';

import { Cities } from '../../providers/cities';
import { Places } from '../../providers/places';

import { DetailPage } from '../detail/detail';
import { ListPage } from '../list/list';

/*
  Generated class for the Places page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {
  public city;
  public me;
  public map: any = {};
  public places = [];
  public loading: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public citiesService: Cities,
    public placesService: Places
  ) {}

  ionViewDidEnter() {
    const id = this.navParams.get('id');
    this.citiesService.findById(id)
      .then((city) => {
        this.city = city;
        this.map.coords = city.coords;

        return this.placesService.findByCityId(id)
      })
      .then((places) => {
        this.places = places;
        console.log(places);
        this.loading = false;
      })
  }

  findMe() {
    this.loading = true;
    Geolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: true }).then((data) => {
      this.me = data;
      this.me.iconUrl = '/assets/images/userMarker.png';

      // Change this after implements boundsChange
      this.map.coords = data.coords;
      this.loading = false;
    })
  }

  goToDetails(id) {
    this.navCtrl.push(DetailPage, { id })
  }

  goToList(id) {
    this.navCtrl.push(ListPage, { id })
  }
}
