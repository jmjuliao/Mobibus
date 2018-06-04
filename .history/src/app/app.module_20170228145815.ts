import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyApp } from './app.component';

import { IntroPage } from './pages/intro/intro';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { ListPage } from '../pages/list/list';
import { PlacesPage } from '../pages/places/places';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    HomePage,
    DetailPage,
    ListPage,
    PlacesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    HomePage,
    DetailPage,
    ListPage,
    PlacesPage
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  }]
})
export class AppModule {}
