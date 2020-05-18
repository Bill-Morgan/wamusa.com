import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerAdComponent } from './banner-ad/banner-ad.component';
import { VMenuComponent } from './v-menu/v-menu.component';
import { DowntownCamComponent } from './downtown-cam/downtown-cam.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerAdComponent,
    VMenuComponent,
    DowntownCamComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
