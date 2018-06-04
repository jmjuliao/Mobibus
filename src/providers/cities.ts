import { Injectable } from '@angular/core';

import find from 'lodash/fp/find';
import { CITIES } from './cities.mock';

/*
  Generated class for the Cities provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Cities {

  findAll() {
    return Promise.resolve(CITIES);
  }

  findById(id) {
    return Promise.resolve(find({ id })(CITIES));
  }

}
