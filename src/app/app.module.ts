import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

//import the RouterModule
import { RouterModule, Routes } from '@angular/router';

//import our routing file
import {RoutingModule} from "../routing.module";
//import the routes const
import {routingComponents} from "../routing.module";
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { ServicesComponent } from './services/services.component';

//parallax component that will appear on all the pages
import { ParallaxComponent } from './parallax/parallax.component';

//materialize modules imports
import { MzSidenavModule, MzParallaxModule, MzCollapsibleModule  } from 'ng2-materialize';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    DetailsComponent,
    ServicesComponent,
    ParallaxComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    MzSidenavModule,
    MzParallaxModule,
    MzCollapsibleModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
