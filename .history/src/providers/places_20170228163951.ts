import { Injectable } from '@angular/core';

import filter from 'lodash/fp/filter';
import find from 'lodash/fp/find';
import { PLACES } from './places.mock';

/*
  Generated class for the Places provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Places {
  findAll() {
    return Promise.resolve(PLACES);
  }

  findById(id) {
    return Promise.resolve(find({ id })(PLACES));
  }

  findByCityId(city) {
    return Promise.resolve(filter({ city })(PLACES))
  }
}
