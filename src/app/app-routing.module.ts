import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ArchitectureComponent } from './component/architecture/architecture.component';
import { ContactComponent } from './component/contact/contact.component';
import { CustomSoftwareComponent } from './component/custom-software/custom-software.component';
import { DataLogComponent } from './component/data-log/data-log.component';

import { HomePageComponent } from './component/home-page/home-page.component';
import { MeatsysComponent } from './component/meatsys/meatsys.component';
import { SentezSoftwareComponent } from './component/sentez-software/sentez-software.component';
import { ServerSystemComponent } from './component/server-system/server-system.component';
import { WaiterSystemComponent } from './component/waiter-system/waiter-system.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomePageComponent},
  {path:"home",component:HomePageComponent},
  {path:"contact",component:ContactComponent},
  {path:"meatsys",component:MeatsysComponent},
  {path:"custom-software",component:CustomSoftwareComponent},
  {path:"server-system",component:ServerSystemComponent},
  {path:"architecture",component:ArchitectureComponent},
  {path:"sentez-software",component:SentezSoftwareComponent},
  {path:"data-log",component:DataLogComponent},
  {path:"waiter-sys",component:WaiterSystemComponent}
];

@NgModule({
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
