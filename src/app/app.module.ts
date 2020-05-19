import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerAdComponent } from './banner-ad/banner-ad.component';
import { VMenuComponent } from './v-menu/v-menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { GsearchComponent } from './gsearch/gsearch.component';
import { BuyComputerComponent } from './buy-computer/buy-computer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerAdComponent,
    VMenuComponent,
    HomepageComponent,
    HeaderComponent,
    GsearchComponent,
    BuyComputerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
