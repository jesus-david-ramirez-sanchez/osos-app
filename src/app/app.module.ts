import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FondoComponent } from './fondo/fondo.component';
import { WhyComponent } from './why/why.component';
import { ForestComponent } from './forest/forest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FondoComponent,
    WhyComponent,
    ForestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
