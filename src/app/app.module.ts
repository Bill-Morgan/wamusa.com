import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BannerAdComponent } from './banner-ad/banner-ad.component';
import { VMenuComponent } from './v-menu/v-menu.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { GsearchComponent } from './gsearch/gsearch.component';
import { BuyComputerComponent } from './buy-computer/buy-computer.component';
import { AlertsComponent } from './alerts/alerts.component';
import { McCovid19Component } from './alerts/mc-covid19/mc-covid19.component';
import { HMenuComponent } from './h-menu/h-menu.component';
import { DdMenuComponent } from './h-menu/dd-menu/dd-menu.component';
import { FlatRateRepairsComponent } from './flat-rate-repairs/flat-rate-repairs.component';
import { GasBuddyComponent } from './gas-buddy/gas-buddy.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CounterComponent } from './counter/counter.component';
import { LitchfieldComponent } from './pages/litchfield/litchfield.component';
import { ObitsPageComponent } from './pages/obits-page/obits-page.component';

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
    DdMenuComponent,
    FlatRateRepairsComponent,
    GasBuddyComponent,
    FooterComponent,
    DashboardComponent,
    CounterComponent,
    LitchfieldComponent,
    ObitsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
