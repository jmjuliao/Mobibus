import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Cities } from '../../providers/cities';
import { PlacesPage } from '../places/places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public cities = [];

  constructor(
    public navCtrl: NavController,
    public citiesService: Cities
  ) {}

  ionViewDidEnter() {
    this.citiesService.findAll().then((cities) => {
      this.cities = cities;
    });
  }

  goToPlaces(id){
    this.navCtrl.push(PlacesPage, { id })
  }

}
