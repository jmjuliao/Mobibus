import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyApp } from './app.component';

import { IntroPage } from './pages/intro/intro';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    HomePage
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  }]
})
export class AppModule {}
