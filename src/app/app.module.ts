import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerAdComponent } from './banner-ad/banner-ad.component';
import { VMenuComponent } from './v-menu/v-menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { GsearchComponent } from './gsearch/gsearch.component';
import { BuyComputerComponent } from './buy-computer/buy-computer.component';
import { AlertsComponent } from './alerts/alerts.component';
import { McCovid19Component } from './alerts/mc-covid19/mc-covid19.component';
import { HMenuComponent } from './h-menu/h-menu.component';
import { DdMenuComponent } from './h-menu/dd-menu/dd-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerAdComponent,
    VMenuComponent,
    HomepageComponent,
    HeaderComponent,
    GsearchComponent,
    BuyComputerComponent,
    AlertsComponent,
    McCovid19Component,
    HMenuComponent,
    DdMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
