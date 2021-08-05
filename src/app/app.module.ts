import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { SocialMediaComponent } from './component/social-media/social-media.component';
import { CardsComponent } from './component/cards/cards.component';
import { GoInfoComponent } from './component/go-info/go-info.component';
import { SocialMedia2Component } from './component/social-media2/social-media2.component';
import { AboutComponent } from './component/about/about.component';
import { ReferansComponent } from './component/referans/referans.component';
import { FootersComponent } from './component/footers/footers.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SocialMediaComponent,
    CardsComponent,
    GoInfoComponent,
    SocialMedia2Component,
    AboutComponent,
    ReferansComponent,
    FootersComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
