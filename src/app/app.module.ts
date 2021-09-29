import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CardsComponent } from './component/cards/cards.component';
import { GoInfoComponent } from './component/go-info/go-info.component';
import { SocialMedia2Component } from './component/social-media2/social-media2.component';
import { AboutComponent } from './component/about/about.component';
import { ReferansComponent } from './component/referans/referans.component';
import { FootersComponent } from './component/footers/footers.component';
import { ContactComponent } from './component/contact/contact.component';
import { MeatsysComponent } from './component/meatsys/meatsys.component';
import { CustomSoftwareComponent } from './component/custom-software/custom-software.component';
import { ServerSystemComponent } from './component/server-system/server-system.component';
import { ArchitectureComponent } from './component/architecture/architecture.component';
import { SentezSoftwareComponent } from './component/sentez-software/sentez-software.component';
import { ButtonsComponent } from './component/buttons/buttons.component';
import { DataLogComponent } from './component/data-log/data-log.component';
import { WaiterSystemComponent } from './component/waiter-system/waiter-system.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CardsComponent,
    GoInfoComponent,
    SocialMedia2Component,
    AboutComponent,
    ReferansComponent,
    FootersComponent,
    ContactComponent,
    MeatsysComponent,
    CustomSoftwareComponent,
    ServerSystemComponent,
    ArchitectureComponent,
    SentezSoftwareComponent,
    ButtonsComponent,
    DataLogComponent,
    WaiterSystemComponent,

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
