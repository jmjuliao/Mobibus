import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import filter from 'lodash/fp/filter';

import { Cities } from '../../providers/cities';
import { Places } from '../../providers/places';

import { DetailPage } from '../detail/detail';
import { PlacesPage } from '../places/places';

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public city;
  public map: any = {};
  public places = [];
  public cachedPlaces = [];
  public loading: boolean = true;
  public searchQuery = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public citiesService: Cities,
    public placesService: Places
  ) {}

  ionViewDidEnter() {
    this.citiesService.findById(this.navParams.get('id')).then((city) => {
      this.city = city;
      this.map.coords = city.coords;
    })

    this.initializePlaces();
  }

  initializePlaces(){
    this.placesService.findByCityId(this.navParams.get('id')).then((places) => {
      this.places = this.cachedPlaces = places;
      this.loading = false;
    })
  }

  getPlaces(event) {
    // set q to the value of the searchbar
    let val = event.target.value.toLowerCase();

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '' && val.length > 2) {
      this.places = filter((p) => p.name.toLowerCase().indexOf(val) > -1)(this.cachedPlaces);
    } else {
      this.places = this.cachedPlaces;
    }
  }

  goToDetails(id) {
    this.navCtrl.push(DetailPage, { id })
  }

}
