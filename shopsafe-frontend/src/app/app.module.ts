import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    ResultsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
