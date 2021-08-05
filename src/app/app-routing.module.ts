import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';

import { HomePageComponent } from './component/home-page/home-page.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomePageComponent},
  {path:"home",component:HomePageComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
