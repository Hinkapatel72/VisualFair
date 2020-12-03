import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';

import { SwiperModule } from 'ngx-swiper-wrapper';

import { FullstoryModule } from 'ng-fullstory';

import { LayoutModule } from '@angular/cdk/layout';

import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeMobileComponent } from './home/home-mobile/home-mobile.component';
import { HomeWebComponent } from './home/home-web/home-web.component';
import { ShareSheetComponent } from './common/share-sheet/share-sheet.component';
import { MatirialModule } from './modules/material.module';

import * as Hammer from 'hammerjs';
import { HammerTimeDirective } from './directives/hammer-time.directive';
import { QuoteComponent } from './common/quote/quote.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pan: { direction: Hammer.DIRECTION_ALL },
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMobileComponent,
    HomeWebComponent,
    ShareSheetComponent,
    HammerTimeDirective,
    QuoteComponent
  ],
  imports: [
    FullstoryModule.forRoot({
      fsOrg: 'TQCJ3',
    }),
    BrowserModule,
    AppRoutingModule,
    MatirialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,

    SwiperModule,


    LayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CookieService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() { }

}
